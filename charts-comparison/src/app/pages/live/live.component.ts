import { Component, OnInit } from '@angular/core';
import { LiveService } from './service/live.service'

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  providers: [LiveService],
})
export class LiveComponent implements OnInit {

  constructor(private liveService: LiveService) { }

  ngOnInit() {
  }

}
