import { Injectable } from '@angular/core';
import { Weather, Temperature } from './city-weather.model';
import { ResponseAdapter } from './response-adapter';


export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
    iconUrl: string;
}

export interface Temperature {
    main: number;
    max: number;
    min: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface WeatherParams {
    cloudiness: number | null;
    rain: number | null;
    snow: number | null;
}

export interface CityData {
    id: number;
    name: string;
    sunrise?: Date;
    sunset?: Date;
    imageUrl?: string;
    country?: string;
}

export class CityWeather  {
    constructor(
      public weather: Weather,
      public temp: Temperature,
      public wind: Wind,
      public city: CityData
    ) { }
}

/**
 * String key to hold date format till year only
 * Needed this for filtering or grouping of the data set by date
 */
export interface ForecastRecords {
    [key: string]: {
        weather: Weather[],
        temp: Temperature[],
        weatherParams: WeatherParams[],
        intervals: Date[]
    };
}




export class CityForecast {
    constructor(
        public records: ForecastRecords,
        public city?: CityData,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class CityWeatherAdapter implements ResponseAdapter<CityWeather> {
    adapt(item: any): CityWeather {
        const {weather, main, wind} = item;
        const weatherData: Weather = weather[0];
        weatherData.iconUrl = `http://openweathermap.org/img/w/${weatherData.icon}.png`;
        const temperatureData: Temperature = {
            main: main.temp, max: main.temp_min, min: main.temp_min
        };
        const windData: Wind = wind;
        const cityData: CityData = {
            id: item.id, name: item.name, sunrise: item.sys.sunrise, sunset: item.sys.sunset
        };
        return new CityWeather(
            weatherData, temperatureData, windData, cityData
        );
    }
}


@Injectable({
    providedIn: 'root'
})
export class CityForecastAdapter implements ResponseAdapter<CityForecast> {
    adapt(item: any): CityForecast {
        const {list, city} = item;
        const weather: Weather[] = [];

        const allForecastRecords: ForecastRecords = {};

        if (list.length) {
            list.map((el: any) => {
                const weatherData: Weather = el.weather[0];
                weatherData.iconUrl = `http://openweathermap.org/img/w/${weatherData.icon}.png`;
                const temperatureData: Temperature = {
                    main: el.main.temp, max: el.main.temp_min, min: el.main.temp_min
                };
                const weatherParamsData: WeatherParams = {
                    cloudiness: el.cloud ? el.cloud.all : null,
                    rain: el.rain ? el.rain['3h'] : null,
                    snow: el.snow ? el.snow['3h'] : null
                };

                const key = ((el.dt_txt).substr(0, 10));

                // Group and merge with the help of keys ( To group by dates )
                // This is kind of mimicing server logic on client side, as server should
                // respond with the required format.
                if (!allForecastRecords.hasOwnProperty(key)) {
                    allForecastRecords[key] = {
                        weather: [], temp: [], weatherParams: [], intervals: []
                    };
                }
                allForecastRecords[key].weather.push(weatherData);
                allForecastRecords[key].temp.push(temperatureData);
                allForecastRecords[key].weatherParams.push(weatherParamsData);
                allForecastRecords[key].intervals.push(new Date(el.dt_txt));
            });
        }

        const cityData: CityData = {
            id: city.id, name: city.name, country: city.country
        };

        return new CityForecast(
            allForecastRecords , cityData
        );
    }
}
