import { NgModule } from '@angular/core';

import { SharedModule} from '../shared/shared.module';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CityForecastDetailsComponent } from './city-forecast-details/city-forecast-details.component';
import { CityForecastOverviewComponent } from './city-forecast-overview/city-forecast-overview.component';


@NgModule({
  declarations: [
    WeatherForecastComponent,
    CityForecastDetailsComponent,
    CityForecastOverviewComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WeatherForecastComponent,
    CityForecastDetailsComponent,
    CityForecastOverviewComponent,
  ]
})
export class WeatherReportModule { }
