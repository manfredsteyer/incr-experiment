import { Component, OnInit } from '@angular/core';
import { F99Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f99',
  templateUrl: './f99.component.html',
  styleUrls: ['./f99.component.scss'],
})
export class F99Component implements OnInit {
  entity99List$ = this.f99Facade.entity99List$;

  constructor(private f99Facade: F99Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f99Facade.load();
  }
}
