import { Component, OnInit } from '@angular/core';
import { F47Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f47',
  templateUrl: './f47.component.html',
  styleUrls: ['./f47.component.scss'],
})
export class F47Component implements OnInit {
  entity47List$ = this.f47Facade.entity47List$;

  constructor(private f47Facade: F47Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f47Facade.load();
  }
}
