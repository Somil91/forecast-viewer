import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CityForecastDetailsComponent } from './city-forecast-details/city-forecast-details.component';
import { CityForecastOverviewComponent } from './city-forecast-overview/city-forecast-overview.component';
import { CitySearchComponent } from './city-search/city-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    CityForecastDetailsComponent,
    CityForecastOverviewComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
