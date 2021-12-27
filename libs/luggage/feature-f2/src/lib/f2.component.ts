import { Component, OnInit } from '@angular/core';
import { F2Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.scss'],
})
export class F2Component implements OnInit {
  entity2List$ = this.f2Facade.entity2List$;

  constructor(private f2Facade: F2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f2Facade.load();
  }
}
