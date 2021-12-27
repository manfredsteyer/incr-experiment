import { Component, OnInit } from '@angular/core';
import { F12Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f12',
  templateUrl: './f12.component.html',
  styleUrls: ['./f12.component.scss'],
})
export class F12Component implements OnInit {
  entity12List$ = this.f12Facade.entity12List$;

  constructor(private f12Facade: F12Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f12Facade.load();
  }
}
