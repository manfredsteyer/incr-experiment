import { Component, OnInit } from '@angular/core';
import { F27Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f27',
  templateUrl: './f27.component.html',
  styleUrls: ['./f27.component.scss'],
})
export class F27Component implements OnInit {
  entity27List$ = this.f27Facade.entity27List$;

  constructor(private f27Facade: F27Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f27Facade.load();
  }
}
