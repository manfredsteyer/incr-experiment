import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature42-component5',
  templateUrl: './feature42-component5.component.html',
  styleUrls: ['./feature42-component5.component.scss'],
})
export class Feature42Component5Component implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(private checkinFacade: CheckinFacade) {}

  ngOnInit() {
    console.debug('Change!');
    console.debug('Change!');
    console.debug('Change!');

    this.load();
  }

  load(): void {
    this.checkinFacade.load();
  }
}
