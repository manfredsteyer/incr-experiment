import { Component, OnInit } from '@angular/core';
import { F33Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f33',
  templateUrl: './f33.component.html',
  styleUrls: ['./f33.component.scss'],
})
export class F33Component implements OnInit {
  entity33List$ = this.f33Facade.entity33List$;

  constructor(private f33Facade: F33Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f33Facade.load();
  }
}
