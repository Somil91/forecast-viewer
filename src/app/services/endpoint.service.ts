import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {CityWeather, CityWeatherAdapter, CityForecast, CityForecastAdapter} from '../models/city-weather.model';

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
        }),
        catchError((error) => this.handleError(error))
      );

  }

  getCityForecast(cityId: number = 2759794): Observable<CityForecast> {
    const weatherEndpoint = `${environment.apiPath}/forecast?id=${cityId}&units=metric&APPID=${environment.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityForecastAdapter.adapt(data);
          return result;
        }),
        catchError((error) => this.handleError(error))
        );
  }

  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code. server error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
