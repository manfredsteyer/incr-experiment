import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity85 } from '../entities/entity85';
import { Entity85DataService } from '../infrastructure/entity85.data.service';

@Injectable({ providedIn: 'root' })
export class F85Facade {
  private entity85ListSubject = new BehaviorSubject<Entity85[]>([]);
  entity85List$ = this.entity85ListSubject.asObservable();

  constructor(private entity85DataService: Entity85DataService) {}

  load(): void {
    this.entity85DataService.load().subscribe(
      (entity85List) => {
        this.entity85ListSubject.next(entity85List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
