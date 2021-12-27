import { Component, OnInit } from '@angular/core';
import { F62Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f62',
  templateUrl: './f62.component.html',
  styleUrls: ['./f62.component.scss'],
})
export class F62Component implements OnInit {
  entity62List$ = this.f62Facade.entity62List$;

  constructor(private f62Facade: F62Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f62Facade.load();
  }
}
