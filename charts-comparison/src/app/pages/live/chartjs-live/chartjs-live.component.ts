import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { LiveService } from '../service/live.service';

@Component({
  selector: 'chartjs-live',
  templateUrl: './chartjs-live.component.html',
  styleUrls: ['./chartjs-live.component.scss'],
  providers: [LiveService],
})
export class ChartjsLiveComponent implements OnInit {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    private liveService: LiveService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [],
        datasets: [{
          data: [],
          label: 'USD',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [],
          label: 'EUR',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [],
          label: 'GBP',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Last 31 days'
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Price'
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });

  }

  ngOnInit() {
    this.liveService.getBitcoinUSDPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          // Introducimos los días en el eje X
          this.data.labels.push(i);
          // Introdudimos los datos del valor de los dolares
          this.data.datasets[0].data.push(obj[i]);
        }
      }
    );

    this.liveService.getBitcoinEURPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          this.data.datasets[1].data.push(obj[i]);
        }
      }
    );

    this.liveService.getBitcoinGBPPrice().subscribe(
      (res: any) => {
        let obj = res.bpi;
        Object.keys(obj);
        for (let i in obj) {
          this.data.datasets[2].data.push(obj[i]);
        }
      }
    );
  }

}
