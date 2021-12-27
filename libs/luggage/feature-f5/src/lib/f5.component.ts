import { Component, OnInit } from '@angular/core';
import { F5Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f5',
  templateUrl: './f5.component.html',
  styleUrls: ['./f5.component.scss'],
})
export class F5Component implements OnInit {
  entity5List$ = this.f5Facade.entity5List$;

  constructor(private f5Facade: F5Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f5Facade.load();
  }
}
