import { Component, OnInit } from '@angular/core';
import { CityData } from '../models/city-weather.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  cities: CityData[] = [
    {
      id: 2759794,
      name: 'Amsterdam',
      imageUrl: 'https://unsplash.com/photos/xQQShnDWY-Q',
      country: 'Netherlands'
    },
    // {
    //   id: 3067696,
    //   name: 'Prague',
    //   imageUrl: 'http://placeholder.it/240x240',
    //   country: 'Czech Republic'
    // },
    // {
    //   id: 2988507,
    //   name: 'Paris',
    //   imageUrl: 'http://placeholder.it/240x240',
    //   country: 'France'
    // },
    // {
    //   id: 2761369,
    //   name: 'Vienna',
    //   imageUrl: 'http://placeholder.it/240x240',
    //   country: 'Austria'
    // },
    // {
    //   id: 3067696,
    //   name: 'Berlin',
    //   imageUrl: 'http://placeholder.it/240x240',
    //   country: 'Germany'
    // },
  ];

  constructor() {}

  ngOnInit() {
  }

}
