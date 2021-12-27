import { Component, OnInit } from '@angular/core';
import { F45Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f45',
  templateUrl: './f45.component.html',
  styleUrls: ['./f45.component.scss'],
})
export class F45Component implements OnInit {
  entity45List$ = this.f45Facade.entity45List$;

  constructor(private f45Facade: F45Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f45Facade.load();
  }
}
