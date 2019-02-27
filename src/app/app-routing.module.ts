import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastComponent } from './weather-report/weather-forecast/weather-forecast.component';
import { CityForecastDetailsComponent } from './weather-report/city-forecast-details/city-forecast-details.component';



const routes: Routes = [
  {path: 'weather-forecast', component: WeatherForecastComponent},
  {path: 'city-forecast/:id', component: CityForecastDetailsComponent},
  { path: '**', redirectTo: 'weather-forecast' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
