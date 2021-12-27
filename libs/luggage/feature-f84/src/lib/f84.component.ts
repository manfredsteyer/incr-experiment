import { Component, OnInit } from '@angular/core';
import { F84Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f84',
  templateUrl: './f84.component.html',
  styleUrls: ['./f84.component.scss'],
})
export class F84Component implements OnInit {
  entity84List$ = this.f84Facade.entity84List$;

  constructor(private f84Facade: F84Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f84Facade.load();
  }
}
