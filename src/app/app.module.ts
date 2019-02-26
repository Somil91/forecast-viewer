import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatSpinner, MatButtonModule, MatButtonToggleModule,
  MatGridList, MatGridTile} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CityForecastDetailsComponent } from './city-forecast-details/city-forecast-details.component';
import { CityForecastOverviewComponent } from './city-forecast-overview/city-forecast-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    CityForecastDetailsComponent,
    CityForecastOverviewComponent,
    MatSpinner,
    MatGridList,
    MatGridTile,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
