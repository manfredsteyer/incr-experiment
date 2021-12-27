import { Component, OnInit } from '@angular/core';
import { F67Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f67',
  templateUrl: './f67.component.html',
  styleUrls: ['./f67.component.scss'],
})
export class F67Component implements OnInit {
  entity67List$ = this.f67Facade.entity67List$;

  constructor(private f67Facade: F67Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f67Facade.load();
  }
}
