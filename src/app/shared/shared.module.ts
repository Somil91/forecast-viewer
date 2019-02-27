import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatProgressSpinnerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatChipsModule
} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatChipsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatChipsModule
  ],
})
export class SharedModule { }
