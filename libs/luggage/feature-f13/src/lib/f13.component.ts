import { Component, OnInit } from '@angular/core';
import { F13Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f13',
  templateUrl: './f13.component.html',
  styleUrls: ['./f13.component.scss'],
})
export class F13Component implements OnInit {
  entity13List$ = this.f13Facade.entity13List$;

  constructor(private f13Facade: F13Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f13Facade.load();
  }
}
