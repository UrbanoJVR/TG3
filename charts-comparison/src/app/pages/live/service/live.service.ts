import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class LiveService {

  constructor(private http: HttpClient) { }

  // Obtenemos el precio en USD de los ultimos 31 días
  getBitcoinUSDPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD';
    return this.http.get(apiURL);
  }

  // Obtenemos el precio en EUR de los ultimos 31 días
  getBitcoinEURPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR';
    return this.http.get(apiURL);
  }

  // Obtenemos el precio en GBP de los ultimos 31 días
  getBitcoinGBPPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=GBP';
    return this.http.get(apiURL);
  }
}
