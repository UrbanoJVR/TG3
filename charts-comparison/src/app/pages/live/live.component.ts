import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // Para detectar cambios en la vista cada segundo
    this.changeDetectorRef.detach();
    setInterval(() => {
      if (!this.changeDetectorRef['destroyed']) {
        this.changeDetectorRef.detectChanges();
      }
    }, 1000);
  }

}
