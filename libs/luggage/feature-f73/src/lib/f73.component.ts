import { Component, OnInit } from '@angular/core';
import { F73Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f73',
  templateUrl: './f73.component.html',
  styleUrls: ['./f73.component.scss'],
})
export class F73Component implements OnInit {
  entity73List$ = this.f73Facade.entity73List$;

  constructor(private f73Facade: F73Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f73Facade.load();
  }
}
