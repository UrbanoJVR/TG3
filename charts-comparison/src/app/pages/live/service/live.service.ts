import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class LiveService {

  constructor(private http: HttpClient) { }

  getBitcoinUSDPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD';
    return this.http.get(apiURL);
  }

  getBitcoinEURPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR';
    return this.http.get(apiURL);
  }

  getBitcoinGBPPrice() {
    const apiURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=GBP';
    return this.http.get(apiURL);
  }
}
