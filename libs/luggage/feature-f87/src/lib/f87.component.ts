import { Component, OnInit } from '@angular/core';
import { F87Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f87',
  templateUrl: './f87.component.html',
  styleUrls: ['./f87.component.scss'],
})
export class F87Component implements OnInit {
  entity87List$ = this.f87Facade.entity87List$;

  constructor(private f87Facade: F87Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f87Facade.load();
  }
}
