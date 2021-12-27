import { Component, OnInit } from '@angular/core';
import { F4Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f4',
  templateUrl: './f4.component.html',
  styleUrls: ['./f4.component.scss'],
})
export class F4Component implements OnInit {
  entity4List$ = this.f4Facade.entity4List$;

  constructor(private f4Facade: F4Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f4Facade.load();
  }
}
