import { Component, OnInit } from '@angular/core';
import { F40Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f40',
  templateUrl: './f40.component.html',
  styleUrls: ['./f40.component.scss'],
})
export class F40Component implements OnInit {
  entity40List$ = this.f40Facade.entity40List$;

  constructor(private f40Facade: F40Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f40Facade.load();
  }
}
