import { Component, OnInit } from '@angular/core';
import { F6Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f6',
  templateUrl: './f6.component.html',
  styleUrls: ['./f6.component.scss'],
})
export class F6Component implements OnInit {
  entity6List$ = this.f6Facade.entity6List$;

  constructor(private f6Facade: F6Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f6Facade.load();
  }
}
