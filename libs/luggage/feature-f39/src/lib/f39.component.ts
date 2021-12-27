import { Component, OnInit } from '@angular/core';
import { F39Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f39',
  templateUrl: './f39.component.html',
  styleUrls: ['./f39.component.scss'],
})
export class F39Component implements OnInit {
  entity39List$ = this.f39Facade.entity39List$;

  constructor(private f39Facade: F39Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f39Facade.load();
  }
}
