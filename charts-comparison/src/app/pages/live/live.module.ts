import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';

import { LiveComponent } from './live.component';
import { ChartjsLiveComponent } from './chartjs-live/chartjs-live.component';
import { EchartsLiveComponent } from './echarts-live/echarts-live.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ThemeModule,
    ChartModule,
  ],
  declarations: [LiveComponent, ChartjsLiveComponent, EchartsLiveComponent,
  ]
})
export class LiveModule { }
