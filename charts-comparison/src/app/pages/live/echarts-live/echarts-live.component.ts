import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LiveService } from '../service/live.service';

@Component({
  selector: 'echarts-live',
  templateUrl: './echarts-live.component.html',
  styleUrls: ['./echarts-live.component.scss'],
  providers: [LiveService,],
})
export class EchartsLiveComponent {

  data: any;
  options: any = {};
  themeSubscription: any;
  labels: any[] = [];
  USDdata: any[] = [];
  EURdata: any[] = [];
  GBPdata: any[] = [];

  constructor(private theme: NbThemeService, private liveService: LiveService, private changeDetectorRef: ChangeDetectorRef, ) {

    // Para detectar cambios en la vista cada segundo
    this.changeDetectorRef.detach();
    setInterval(() => {
      if (!this.changeDetectorRef['destroyed']) {
        this.changeDetectorRef.detectChanges();
        this.ngAfterViewInit();
      }
    }, 1000);

    this.liveService.getBitcoinUSDPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          // Introducimos los días en el eje X
          this.labels.push(i);
          // Introdudimos los datos del valor de los dolares
          this.USDdata.push(obj[i]);
        }
        // Llamamos a la función para recargar la vista
        this.ngAfterViewInit();
      }
    );

    this.liveService.getBitcoinEURPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          this.EURdata.push(obj[i]);
        }
        this.ngAfterViewInit();
      }
    );

    this.liveService.getBitcoinGBPPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          this.GBPdata.push(obj[i]);
        }
        this.ngAfterViewInit();
      }
    );
  }

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
          left: 'center',
          data: ['USD', 'EUR', 'GBP'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            name: 'Last 31 days',
            nameLocation: 'center',
            nameGap: 25,
            data: this.labels,
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
            name: 'Price',
            nameLocation: 'center',
            nameGap: 25,
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
          left: '2%',
          right: '2%',
          containLabel: true,
        },
        series: [
          {
            name: 'USD',
            type: 'line',
            data: this.USDdata,
          },
          {
            name: 'EUR',
            type: 'line',
            data: this.EURdata,
          },
          {
            name: 'GBP',
            type: 'line',
            data: this.GBPdata,
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}

