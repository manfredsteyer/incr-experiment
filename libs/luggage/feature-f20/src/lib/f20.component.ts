import { Component, OnInit } from '@angular/core';
import { F20Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f20',
  templateUrl: './f20.component.html',
  styleUrls: ['./f20.component.scss'],
})
export class F20Component implements OnInit {
  entity20List$ = this.f20Facade.entity20List$;

  constructor(private f20Facade: F20Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f20Facade.load();
  }
}
