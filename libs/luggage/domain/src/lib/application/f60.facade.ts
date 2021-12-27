import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity60 } from '../entities/entity60';
import { Entity60DataService } from '../infrastructure/entity60.data.service';

@Injectable({ providedIn: 'root' })
export class F60Facade {
  private entity60ListSubject = new BehaviorSubject<Entity60[]>([]);
  entity60List$ = this.entity60ListSubject.asObservable();

  constructor(private entity60DataService: Entity60DataService) {}

  load(): void {
    this.entity60DataService.load().subscribe(
      (entity60List) => {
        this.entity60ListSubject.next(entity60List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
