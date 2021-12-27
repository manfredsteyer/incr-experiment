import { Component, OnInit } from '@angular/core';
import { F32Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f32',
  templateUrl: './f32.component.html',
  styleUrls: ['./f32.component.scss'],
})
export class F32Component implements OnInit {
  entity32List$ = this.f32Facade.entity32List$;

  constructor(private f32Facade: F32Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.f32Facade.load();
  }
}
