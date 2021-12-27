import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity61 } from '../entities/entity61';
import { Entity61DataService } from '../infrastructure/entity61.data.service';

@Injectable({ providedIn: 'root' })
export class F61Facade {
  private entity61ListSubject = new BehaviorSubject<Entity61[]>([]);
  entity61List$ = this.entity61ListSubject.asObservable();

  constructor(private entity61DataService: Entity61DataService) {}

  load(): void {
    this.entity61DataService.load().subscribe(
      (entity61List) => {
        this.entity61ListSubject.next(entity61List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
