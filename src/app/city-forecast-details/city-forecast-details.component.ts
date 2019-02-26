import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EndpointService } from '../endpoint.service';
import { CityForecast } from '../models/city-weather.model';
@Component({
  selector: 'app-city-forecast-details',
  templateUrl: './city-forecast-details.component.html',
  styleUrls: ['./city-forecast-details.component.scss']
})
export class CityForecastDetailsComponent implements OnInit {

  isLoading = false;
  forecastDetails: CityForecast;
  selectedForecast;
  selectedDate: string;

  constructor(
    private route: ActivatedRoute,
    private endpointService: EndpointService
  ) { }

  ngOnInit() {
    this.getCityDetails();
  }

  getCityDetails() {
    this.isLoading = true;
    const cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.endpointService.getCityForecast(cityId)
      .subscribe(
        (details) => {
          this.forecastDetails = details;
          this.selectedDate = this.selectFirstDate();
          this.filterReportBy(this.selectedDate);
          console.log('selected Date', this.selectedDate);
          console.log('Details Received', details);
          this.isLoading = false;
        }
      );
  }
  /**
   * This is to get the first key (first date) to make the default toggle button selected.
   * as Object.keys() doesn't always returns first key.
   */
  selectFirstDate() {
    let currentDate = Object.keys(this.forecastDetails.records)[0];
    for (const key in this.forecastDetails.records) {
        if (new Date(currentDate) <= new Date(key)) {
          currentDate = key;
        }
      }
    return currentDate;
  }


  filterReportBy(value) {
    console.log(value);
    this.selectedForecast = {};
    this.selectedForecast = this.forecastDetails.records[value];
    this.selectedDate = value;
    console.log(this.selectedForecast);
  }

}
