import { Component, OnInit } from '@angular/core';
import { F88Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f88',
  templateUrl: './f88.component.html',
  styleUrls: ['./f88.component.scss'],
})
export class F88Component implements OnInit {
  entity88List$ = this.f88Facade.entity88List$;

  constructor(private f88Facade: F88Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f88Facade.load();
  }
}
