import { Component, OnInit } from '@angular/core';
import { F42Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f42',
  templateUrl: './f42.component.html',
  styleUrls: ['./f42.component.scss'],
})
export class F42Component implements OnInit {
  entity42List$ = this.f42Facade.entity42List$;

  constructor(private f42Facade: F42Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f42Facade.load();
  }
}
