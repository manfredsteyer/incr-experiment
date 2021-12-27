import { Component, OnInit } from '@angular/core';
import { F41Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f41',
  templateUrl: './f41.component.html',
  styleUrls: ['./f41.component.scss'],
})
export class F41Component implements OnInit {
  entity41List$ = this.f41Facade.entity41List$;

  constructor(private f41Facade: F41Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f41Facade.load();
  }
}
