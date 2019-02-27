import { Component, OnInit } from '@angular/core';
import { CityData } from '../../models/city-weather.model';
import { Router } from '@angular/router';

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
      imageUrl: 'https://source.unsplash.com/xQQShnDWY-Q',
      country: 'Netherlands'
    },
    {
      id: 3067696,
      name: 'Prague',
      imageUrl: 'https://source.unsplash.com/oUz3TepCSko',
      country: 'Czech Republic'
    },
    {
      id: 2988507,
      name: 'Paris',
      imageUrl: 'https://source.unsplash.com/vowZFVPFzK0',
      country: 'France'
    },
    {
      id: 2761369,
      name: 'Vienna',
      imageUrl: 'https://source.unsplash.com/5SjAaqqCCmY',
      country: 'Austria'
    },
    {
      id: 3067696,
      name: 'Berlin',
      imageUrl: 'https://source.unsplash.com/iPOZf3tQfHA',
      country: 'Germany'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  showForecastDetails(cityId) {
    this.router.navigateByUrl(`city-forecast/${cityId}`);
  }

}
