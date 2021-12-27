import { Component, OnInit } from '@angular/core';
import { F35Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f35',
  templateUrl: './f35.component.html',
  styleUrls: ['./f35.component.scss'],
})
export class F35Component implements OnInit {
  entity35List$ = this.f35Facade.entity35List$;

  constructor(private f35Facade: F35Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f35Facade.load();
  }
}
