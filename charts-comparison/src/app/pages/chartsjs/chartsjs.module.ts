import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';

import { ChartsjsComponent } from './chartsjs.component';

import { ChartjsBarComponent } from './chartsjs-bar.component';
import { ChartjsLineComponent } from './chartsjs-line.component';
import { ChartjsPieComponent } from './charts-pie.component';
import { ChartjsMultipleXaxisComponent } from './chartsjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartsjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartsjs-radar.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    ThemeModule
  ],
  declarations: [
    ChartsjsComponent,
    ChartjsBarComponent,
    ChartjsLineComponent,
    ChartjsPieComponent,
    ChartjsMultipleXaxisComponent,
    ChartjsBarHorizontalComponent,
    ChartjsRadarComponent,
  ]
})
export class ChartsjsModule { }
