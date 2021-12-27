import { Component, OnInit } from '@angular/core';
import { F50Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f50',
  templateUrl: './f50.component.html',
  styleUrls: ['./f50.component.scss'],
})
export class F50Component implements OnInit {
  entity50List$ = this.f50Facade.entity50List$;

  constructor(private f50Facade: F50Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f50Facade.load();
  }
}
