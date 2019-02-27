import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { EndpointService } from '../../services/endpoint.service';
import { CityWeather, CityData } from '../../models/city-weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-forecast-overview',
  templateUrl: './city-forecast-overview.component.html',
  styleUrls: ['./city-forecast-overview.component.scss']
})
export class CityForecastOverviewComponent implements OnInit , OnDestroy {
  @Input() city: CityData;

  cityWeatherDetails: CityWeather;
  isLoading = false;
  cityWeatherSubscription: Subscription;

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    this.isLoading = true;
    this.cityWeatherSubscription = this.endpointService.getCityWeatherReport(this.city.id)
    .subscribe(
      (cityData) => {
        this.cityWeatherDetails = cityData;
        this.isLoading = false;
      },
      (error) => {
        alert(error);
      }
    );
  }

  ngOnDestroy() {
    this.cityWeatherSubscription.unsubscribe();
  }

}
