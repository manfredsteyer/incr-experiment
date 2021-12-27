import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature86-component18',
  templateUrl: './feature86-component18.component.html',
  styleUrls: ['./feature86-component18.component.scss'],
})
export class Feature86Component18Component implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
