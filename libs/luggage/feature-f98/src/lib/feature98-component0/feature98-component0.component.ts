import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature98-component0',
  templateUrl: './feature98-component0.component.html',
  styleUrls: ['./feature98-component0.component.scss'],
})
export class Feature98Component0Component implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
