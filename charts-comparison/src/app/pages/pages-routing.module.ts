import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ChartsjsComponent } from './chartsjs/chartsjs.component';
import { EchartsComponent } from './echarts/echarts.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'chartsjs',
      component: ChartsjsComponent,
    },
    {
      path: 'echarts',
      component: EchartsComponent,
    },
    {
      path: '',
      redirectTo: 'chartsjs',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

export const routedComponents = [
  EchartsComponent,
  ChartsjsComponent,
];
