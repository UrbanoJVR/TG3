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

    // Para detectar cambios en la vista cada 5 segundos
    this.changeDetectorRef.detach();
    setInterval(() => {
      if (!this.changeDetectorRef['destroyed']) {
        this.changeDetectorRef.detectChanges();
        this.ngAfterViewInit();
      }
    }, 5000);

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
          trigger: 'axis',
        },
        legend: {
          left: 'center',
          top: 25,
          data: ['USD', 'EUR', 'GBP']
        },

        xAxis: [
          {
            type: 'category',
            name: 'Last 31 days',
            nameLocation: 'center',
            nameGap: 40,
            data: this.labels,
            axisLabel : {
              formatter: '{value}'
          } 
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Price',
            nameLocation: 'center',
            nameGap: 60,
          },
        ],
        grid: {
          left: '5%',
          right: '5%',
          containLabel: true,

        },
        series: [
          {
            name: 'USD',
            type: 'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: this.USDdata,
            markPoint : {
              data : [
                  {type : 'max', name: 'max $'},
                  {type : 'min', name: 'min $'}
              ]
          },
          },
          {
            name: 'EUR',
            type: 'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: this.EURdata,
            markLine : {
              data : [
                  {type : 'average', name: 'media €'}
              ]
          }
          },
          {
            name: 'GBP',
            type: 'line',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
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