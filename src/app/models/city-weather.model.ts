import { Injectable } from '@angular/core';
import { Weather, Temperature } from './city-weather.model';
import { ResponseAdapter } from './response-adapter';


export interface Weather {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export interface Temperature {
    main: number;
    max: number;
    min: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
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

@Injectable({
    providedIn: 'root'
})
export class CityWeatherAdapter implements ResponseAdapter<CityWeather> {
    adapt(item: any): CityWeather {
        const {weather, main, wind} = item;
        const weatherData: Weather = weather[0];
        const temperatureData: Temperature = {
            main: main.temp, max: main.temp_min, min: main.temp_min, humidity: main.humidity
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
