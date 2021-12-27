import { Component, OnInit } from '@angular/core';
import { F26Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f26',
  templateUrl: './f26.component.html',
  styleUrls: ['./f26.component.scss'],
})
export class F26Component implements OnInit {
  entity26List$ = this.f26Facade.entity26List$;

  constructor(private f26Facade: F26Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f26Facade.load();
  }
}
