import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {CityWeather, CityWeatherAdapter, CityForecastAdapter} from '../models/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  constructor(
    private http: HttpClient,
    private cityWeatherAdapter: CityWeatherAdapter,
    private cityForecastAdapter: CityForecastAdapter
    ) {}

  getCityWeatherReport(cityId: number = 2759794): Observable<CityWeather> {
    const weatherEndpoint = `${environment.apiPath}/weather/?id=${cityId}&units=metric&APPID=${environment.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityWeatherAdapter.adapt(data);
          return result;
        }
      ));

  }

  getCityForecast(cityId: number = 2759794): Observable<any> {
    const weatherEndpoint = `${environment.apiPath}/forecast?id=${cityId}&units=metric&APPID=${environment.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityForecastAdapter.adapt(data);
          return result;
        }
    ));
  }
}
