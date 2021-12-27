import { Component, OnInit } from '@angular/core';
import { F98Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f98',
  templateUrl: './f98.component.html',
  styleUrls: ['./f98.component.scss'],
})
export class F98Component implements OnInit {
  entity98List$ = this.f98Facade.entity98List$;

  constructor(private f98Facade: F98Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f98Facade.load();
  }
}
