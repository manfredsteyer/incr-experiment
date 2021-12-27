import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity48 } from '../entities/entity48';
import { Entity48DataService } from '../infrastructure/entity48.data.service';

@Injectable({ providedIn: 'root' })
export class F48Facade {
  private entity48ListSubject = new BehaviorSubject<Entity48[]>([]);
  entity48List$ = this.entity48ListSubject.asObservable();

  constructor(private entity48DataService: Entity48DataService) {}

  load(): void {
    this.entity48DataService.load().subscribe(
      (entity48List) => {
        this.entity48ListSubject.next(entity48List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
