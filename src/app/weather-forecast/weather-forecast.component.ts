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
    {
      id: 3067696,
      name: 'Prague',
      imageUrl: 'https://unsplash.com/photos/oUz3TepCSko',
      country: 'Czech Republic'
    },
    // {
    //   id: 2988507,
    //   name: 'Paris',
    //   imageUrl: 'https://unsplash.com/photos/vowZFVPFzK0',
    //   country: 'France'
    // },
    // {
    //   id: 2761369,
    //   name: 'Vienna',
    //   imageUrl: 'https://unsplash.com/photos/5SjAaqqCCmY',
    //   country: 'Austria'
    // },
    // {
    //   id: 3067696,
    //   name: 'Berlin',
    //   imageUrl: 'https://unsplash.com/photos/iPOZf3tQfHA',
    //   country: 'Germany'
    // },
  ];

  constructor() {}

  ngOnInit() {
  }

}
