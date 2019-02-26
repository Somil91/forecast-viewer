import { Component, OnInit, Input } from '@angular/core';

import { EndpointService } from '../endpoint.service';
import { CityWeather, CityData } from '../models/city-weather.model';
@Component({
  selector: 'app-city-forecast-overview',
  templateUrl: './city-forecast-overview.component.html',
  styleUrls: ['./city-forecast-overview.component.scss']
})
export class CityForecastOverviewComponent implements OnInit {
  @Input() city: CityData;
  public cityWeatherDetails: CityWeather;
  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    this.endpointService.getCityWeatherReport(this.city.id)
    .subscribe(
      (cityData) => {
        console.log('city Data Received', cityData);
        this.cityWeatherDetails = cityData;
      }
    );
  }

}
