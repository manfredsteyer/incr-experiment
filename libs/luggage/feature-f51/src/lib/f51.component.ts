import { Component, OnInit } from '@angular/core';
import { F51Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f51',
  templateUrl: './f51.component.html',
  styleUrls: ['./f51.component.scss'],
})
export class F51Component implements OnInit {
  entity51List$ = this.f51Facade.entity51List$;

  constructor(private f51Facade: F51Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f51Facade.load();
  }
}
