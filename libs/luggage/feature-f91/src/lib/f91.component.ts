import { Component, OnInit } from '@angular/core';
import { F91Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f91',
  templateUrl: './f91.component.html',
  styleUrls: ['./f91.component.scss'],
})
export class F91Component implements OnInit {
  entity91List$ = this.f91Facade.entity91List$;

  constructor(private f91Facade: F91Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f91Facade.load();
  }
}
