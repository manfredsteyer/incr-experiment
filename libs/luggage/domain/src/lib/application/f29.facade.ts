import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity29 } from '../entities/entity29';
import { Entity29DataService } from '../infrastructure/entity29.data.service';

@Injectable({ providedIn: 'root' })
export class F29Facade {
  private entity29ListSubject = new BehaviorSubject<Entity29[]>([]);
  entity29List$ = this.entity29ListSubject.asObservable();

  constructor(private entity29DataService: Entity29DataService) {}

  load(): void {
    this.entity29DataService.load().subscribe(
      (entity29List) => {
        this.entity29ListSubject.next(entity29List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
