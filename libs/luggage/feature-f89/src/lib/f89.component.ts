import { Component, OnInit } from '@angular/core';
import { F89Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f89',
  templateUrl: './f89.component.html',
  styleUrls: ['./f89.component.scss'],
})
export class F89Component implements OnInit {
  entity89List$ = this.f89Facade.entity89List$;

  constructor(private f89Facade: F89Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f89Facade.load();
  }
}
