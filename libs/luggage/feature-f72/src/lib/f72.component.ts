import { Component, OnInit } from '@angular/core';
import { F72Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f72',
  templateUrl: './f72.component.html',
  styleUrls: ['./f72.component.scss'],
})
export class F72Component implements OnInit {
  entity72List$ = this.f72Facade.entity72List$;

  constructor(private f72Facade: F72Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f72Facade.load();
  }
}
