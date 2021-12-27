import { Component, OnInit } from '@angular/core';
import { F61Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f61',
  templateUrl: './f61.component.html',
  styleUrls: ['./f61.component.scss'],
})
export class F61Component implements OnInit {
  entity61List$ = this.f61Facade.entity61List$;

  constructor(private f61Facade: F61Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f61Facade.load();
  }
}
