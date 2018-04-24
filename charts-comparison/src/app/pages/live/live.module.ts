import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';

import {LiveComponent} from './live.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ThemeModule,
  ],
  declarations: [
    LiveComponent,
  ]
})
export class LiveModule { }
