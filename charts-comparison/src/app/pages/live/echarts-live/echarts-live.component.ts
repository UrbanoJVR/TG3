import { Component, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LiveService } from '../service/live.service';

@Component({
  selector: 'echarts-live',
  templateUrl: './echarts-live.component.html',
  styleUrls: ['./echarts-live.component.scss'],
  providers: [LiveService,],
})
export class EchartsLiveComponent {

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    private liveService: LiveService,) {}

    ngAfterViewInit() {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;
  
        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.danger, colors.primary, colors.info],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}',
          },
          legend: {
            left: 'left',
            data: ['USD', 'EUR', 'GBP'],
            textStyle: {
              color: echarts.textColor,
            },
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-04-20', '2018-04-21', '2018-04-22'],
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'log',
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          series: [
            {
              name: 'USD',
              type: 'line',
              data: [1, 3, 9],
            },
            {
              name: 'EUR',
              type: 'line',
              data: [2, 4, 11],
            },
            {
              name: 'GBP',
              type: 'line',
              data: [4, 7, 15],
            },
          ],
        };
      });
    }
  
    ngOnDestroy(): void {
      this.themeSubscription.unsubscribe();
    }

}

