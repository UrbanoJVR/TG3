import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ChartsjsModule } from './chartsjs/chartsjs.module';
import { EchartsModule } from './echarts/echarts.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ChartsjsModule,
    EchartsModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
