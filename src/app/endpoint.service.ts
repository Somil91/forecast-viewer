import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {CityWeather, CityWeatherAdapter} from './models/city-weather.model';
@Injectable({
  providedIn: 'root'
})
export class EndpointService {

   apiToken = 'a6c98ebcf46fd073bf700219a88bd003';
   apiPath = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient, private cityWeatherAdapter: CityWeatherAdapter) {}

  getCityWeatherReport(cityId): Observable<CityWeather> {
    const weatherEndpoint = `${this.apiPath}?id=${cityId}&units=metric&APPID=${this.apiToken}`;
    return this.http.get(weatherEndpoint)
      .pipe(
        map((data: any) => {
          const result = this.cityWeatherAdapter.adapt(data);
          return result;
        }
      ));

  }


  // getCityForecast(cityId: number = 2759794): Observable<any> {
  //   const weatherEndpoint = `${this.apiPath}?id=${cityId}&units=metric&APPID=${this.apiToken}`;
  //   return this.http.get(weatherEndpoint)
  //     .pipe(
  //         map((res: Response) => {
  //           console.log(res.json());
  //         return res.json();
  //         })
  //     );
  // }
}
