import { Component, OnInit } from '@angular/core';
import { F16Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f16',
  templateUrl: './f16.component.html',
  styleUrls: ['./f16.component.scss'],
})
export class F16Component implements OnInit {
  entity16List$ = this.f16Facade.entity16List$;

  constructor(private f16Facade: F16Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f16Facade.load();
  }
}
