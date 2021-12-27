import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature35-component9',
  templateUrl: './feature35-component9.component.html',
  styleUrls: ['./feature35-component9.component.scss'],
})
export class Feature35Component9Component implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
