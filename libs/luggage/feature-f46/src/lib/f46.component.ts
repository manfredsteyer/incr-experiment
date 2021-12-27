import { Component, OnInit } from '@angular/core';
import { F46Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f46',
  templateUrl: './f46.component.html',
  styleUrls: ['./f46.component.scss'],
})
export class F46Component implements OnInit {
  entity46List$ = this.f46Facade.entity46List$;

  constructor(private f46Facade: F46Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f46Facade.load();
  }
}
