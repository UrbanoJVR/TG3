import { Component, OnInit } from "@angular/core";
import { NbThemeService } from '@nebular/theme';
import { HttpClient } from "@angular/common/http";
import { NgxEchartsService } from "ngx-echarts";

@Component({
    selector: 'ngx-echarts-map-density',
    template: `
    <div echarts [options]="options" [loading]="!mapLoaded" class="demo-chart"></div>
    `,
})

export class EchartsMapDensityComponent implements OnInit {
    // show loading spinner:
    mapLoaded = false;
    // empty option before geoJSON loaded:
    options = {};
  
    constructor(private http: HttpClient, private es: NgxEchartsService) { }
  
    ngOnInit() {
      // fetch map geo JSON data from server
      this.http.get('https://xieziyu.github.io/ngx-echarts/assets/data/HK.json')
        .subscribe(geoJson => {
          // hide loading:
          this.mapLoaded = true;
          // register map:
          this.es.registerMap('HK', geoJson);
          // update options:
          this.options = {
            title: {
              text: 'Population density in Hong Kong（2011）',
              subtext: 'Link Wikipedia',
              sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} (p / km2)'
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            visualMap: {
              min: 800,
              max: 50000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                name: 'Densidad población',
                type: 'map',
                mapType: 'HK', // map type should be registered
                itemStyle: {
                  normal: { label: { show: true } },
                  emphasis: { label: { show: true } }
                },
                data: [
                  { name: 'Central and Western', value: 20057.34 },
                  { name: 'Eastern', value: 15477.48 },
                  { name: 'Islands', value: 31686.1 },
                  { name: 'Kowloon City', value: 6992.6 },
                  { name: 'Kwai Tsing', value: 44045.49 },
                  { name: 'Kwun Tong', value: 40689.64 },
                  { name: 'North', value: 37659.78 },
                  { name: 'Sai Kung', value: 45180.97 },
                  { name: 'Sha Tin', value: 55204.26 },
                  { name: 'Sham Shui Po', value: 21900.9 },
                  { name: 'Southern', value: 4918.26 },
                  { name: 'Tai Po', value: 5881.84 },
                  { name: 'Tsuen Wan', value: 4178.01 },
                  { name: 'Tuen Mun', value: 2227.92 },
                  { name: 'Wan Chai', value: 2180.98 },
                  { name: 'Wong Tai Sin', value: 9172.94 },
                  { name: 'Yau Tsim Mong', value: 3368 },
                  { name: 'Yuen Long', value: 806.98 }
                ],
                nameMap: {
                  'Central and Western': 'Central and Western',
                  'Eastern': 'Eastern',
                  'Islands': 'Islands',
                  'Kowloon City': 'Kowloon City',
                  'Kwai Tsing': 'Kwai Tsing',
                  'Kwun Tong': 'Kwun Tong',
                  'North': 'North',
                  'Sai Kung': 'Sai Kung',
                  'Sha Tin': 'Sha Tin',
                  'Sham Shui Po': 'Sham Shui Po',
                  'Southern': 'Southern',
                  'Tai Po': 'Tai Po',
                  'Tsuen Wan': 'Tsuen Wan',
                  'Tuen Mun': 'Tuen Mun',
                  'Wan Chai': 'Wan Chai',
                  'Wong Tai Sin': 'Wong Tai Sin',
                  'Yau Tsim Mong': 'Yau Tsim Mong',
                  'Yuen Long': 'Yuen Long'
                }
              }
            ]
          };
        });
    }
  
  }