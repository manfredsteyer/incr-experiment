import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature12-component6',
  templateUrl: './feature12-component6.component.html',
  styleUrls: ['./feature12-component6.component.scss'],
})
export class Feature12Component6Component implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
