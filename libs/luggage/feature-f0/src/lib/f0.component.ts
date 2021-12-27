import { Component, OnInit } from '@angular/core';
import { F0Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f0',
  templateUrl: './f0.component.html',
  styleUrls: ['./f0.component.scss'],
})
export class F0Component implements OnInit {
  entity0List$ = this.f0Facade.entity0List$;

  constructor(private f0Facade: F0Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f0Facade.load();
  }
}
