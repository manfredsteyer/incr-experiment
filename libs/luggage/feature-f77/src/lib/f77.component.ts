import { Component, OnInit } from '@angular/core';
import { F77Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f77',
  templateUrl: './f77.component.html',
  styleUrls: ['./f77.component.scss'],
})
export class F77Component implements OnInit {
  entity77List$ = this.f77Facade.entity77List$;

  constructor(private f77Facade: F77Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f77Facade.load();
  }
}
