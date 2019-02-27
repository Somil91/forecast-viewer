import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatProgressSpinnerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
  ],
  exports: [
    CommonModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
  ],
})
export class SharedModule { }
