import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';

import { EchartsComponent } from './echarts.component';

import { EchartsAreaStackComponent } from './echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts-bar-animation.component';
import { EchartsBarComponent } from './echarts-bar.component';
import { EchartsLineComponent } from './echarts-line.component';
import { EchartsMultipleXaxisComponent } from './echarts-multiple-xaxis.component';
import { EchartsPieComponent } from './echarts-pie.component';
import { EchartsRadarComponent } from './echarts-radar.component';
import { EchartsTreeComponent } from './echarts-tree.component'


@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    ThemeModule,
  ],
  declarations: [EchartsComponent,
    EchartsAreaStackComponent,
    EchartsBarAnimationComponent,
    EchartsBarComponent,
    EchartsLineComponent,
    EchartsMultipleXaxisComponent,
    EchartsPieComponent,
    EchartsRadarComponent,
    EchartsTreeComponent,
  ]
})
export class EchartsModule { }
