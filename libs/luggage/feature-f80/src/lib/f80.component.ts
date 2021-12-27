import { Component, OnInit } from '@angular/core';
import { F80Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f80',
  templateUrl: './f80.component.html',
  styleUrls: ['./f80.component.scss'],
})
export class F80Component implements OnInit {
  entity80List$ = this.f80Facade.entity80List$;

  constructor(private f80Facade: F80Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f80Facade.load();
  }
}
