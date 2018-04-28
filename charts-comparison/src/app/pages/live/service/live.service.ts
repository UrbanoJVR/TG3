import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LiveService {

  constructor(private http: HttpClient) { }

  getBitcoinPrice() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    this.http.get(url).map((res: Response) => res.json());
  }
}
