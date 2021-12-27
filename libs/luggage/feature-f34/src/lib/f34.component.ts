import { Component, OnInit } from '@angular/core';
import { F34Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f34',
  templateUrl: './f34.component.html',
  styleUrls: ['./f34.component.scss'],
})
export class F34Component implements OnInit {
  entity34List$ = this.f34Facade.entity34List$;

  constructor(private f34Facade: F34Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f34Facade.load();
  }
}
