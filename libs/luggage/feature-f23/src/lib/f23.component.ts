import { Component, OnInit } from '@angular/core';
import { F23Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f23',
  templateUrl: './f23.component.html',
  styleUrls: ['./f23.component.scss'],
})
export class F23Component implements OnInit {
  entity23List$ = this.f23Facade.entity23List$;

  constructor(private f23Facade: F23Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f23Facade.load();
  }
}
