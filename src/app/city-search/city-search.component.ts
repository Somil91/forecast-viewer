import { Component, OnInit } from '@angular/core';


import { EndpointService } from '../endpoint.service';
import { CityWeather } from '../models/city-weather.model';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  public cityWeatherDetails: CityWeather;
  constructor(private endpointService: EndpointService) { }

  ngOnInit() {

  }

}
