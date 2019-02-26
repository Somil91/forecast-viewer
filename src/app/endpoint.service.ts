import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {CityWeather, CityWeatherAdapter, CityForecastAdapter} from './models/city-weather.model';
@Injectable({
  providedIn: 'root'
})
export class EndpointService {

   apiToken = 'a6c98ebcf46fd073bf700219a88bd003';
   apiPath = 'http://api.openweathermap.org/data/2.5';

  constructor(
    private http: HttpClient,
    private cityWeatherAdapter: CityWeatherAdapter,
    private cityForecastAdapter: CityForecastAdapter
    ) {}

  getCityWeatherReport(cityId: number = 2759794): Observable<CityWeather> {
    const weatherEndpoint = `${this.apiPath}/weather/?id=${cityId}&units=metric&APPID=${this.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityWeatherAdapter.adapt(data);
          return result;
        }
      ));

  }


  getCityForecast(cityId: number = 2759794): Observable<any> {
    const weatherEndpoint = `${this.apiPath}/forecast?id=${cityId}&units=metric&APPID=${this.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityForecastAdapter.adapt(data);
          return result;
        }
    ));
  }
}
