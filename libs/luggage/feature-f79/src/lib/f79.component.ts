import { Component, OnInit } from '@angular/core';
import { F79Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f79',
  templateUrl: './f79.component.html',
  styleUrls: ['./f79.component.scss'],
})
export class F79Component implements OnInit {
  entity79List$ = this.f79Facade.entity79List$;

  constructor(private f79Facade: F79Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f79Facade.load();
  }
}
