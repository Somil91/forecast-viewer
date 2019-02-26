import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EndpointService } from '../endpoint.service';
import { CityWeather, CityData } from '../models/city-weather.model';
@Component({
  selector: 'app-city-forecast-details',
  templateUrl: './city-forecast-details.component.html',
  styleUrls: ['./city-forecast-details.component.scss']
})
export class CityForecastDetailsComponent implements OnInit {

  isLoading = false;
  forecastDetails ;

  constructor(
    private route: ActivatedRoute,
    private endpointService: EndpointService
  ) { }

  ngOnInit() {
    this.getCityDetails();
  }

  getCityDetails() {
    const cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.endpointService.getCityForecast(cityId)
      .subscribe(
        (details) => {
          console.log('Details Received', details);
          this.forecastDetails = details
          this.isLoading = false;
        }
      )
  }

}
