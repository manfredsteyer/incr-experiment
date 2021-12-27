import { Component, OnInit } from '@angular/core';
import { F90Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f90',
  templateUrl: './f90.component.html',
  styleUrls: ['./f90.component.scss'],
})
export class F90Component implements OnInit {
  entity90List$ = this.f90Facade.entity90List$;

  constructor(private f90Facade: F90Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f90Facade.load();
  }
}
