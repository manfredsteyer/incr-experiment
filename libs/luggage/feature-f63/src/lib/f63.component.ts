import { Component, OnInit } from '@angular/core';
import { F63Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f63',
  templateUrl: './f63.component.html',
  styleUrls: ['./f63.component.scss'],
})
export class F63Component implements OnInit {
  entity63List$ = this.f63Facade.entity63List$;

  constructor(private f63Facade: F63Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f63Facade.load();
  }
}
