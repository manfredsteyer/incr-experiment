import { Component, OnInit } from '@angular/core';
import { F93Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f93',
  templateUrl: './f93.component.html',
  styleUrls: ['./f93.component.scss'],
})
export class F93Component implements OnInit {
  entity93List$ = this.f93Facade.entity93List$;

  constructor(private f93Facade: F93Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f93Facade.load();
  }
}
