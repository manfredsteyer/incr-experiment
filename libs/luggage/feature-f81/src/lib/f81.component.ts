import { Component, OnInit } from '@angular/core';
import { F81Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f81',
  templateUrl: './f81.component.html',
  styleUrls: ['./f81.component.scss'],
})
export class F81Component implements OnInit {
  entity81List$ = this.f81Facade.entity81List$;

  constructor(private f81Facade: F81Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f81Facade.load();
  }
}
