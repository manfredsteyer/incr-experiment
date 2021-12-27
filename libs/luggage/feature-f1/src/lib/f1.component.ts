import { Component, OnInit } from '@angular/core';
import { F1Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class F1Component implements OnInit {
  entity1List$ = this.f1Facade.entity1List$;

  constructor(private f1Facade: F1Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f1Facade.load();
  }
}
