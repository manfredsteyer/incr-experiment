import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity1 } from '../entities/entity1';
import { Entity1DataService } from '../infrastructure/entity1.data.service';

@Injectable({ providedIn: 'root' })
export class F1Facade {
  private entity1ListSubject = new BehaviorSubject<Entity1[]>([]);
  entity1List$ = this.entity1ListSubject.asObservable();

  constructor(private entity1DataService: Entity1DataService) {}

  load(): void {
    this.entity1DataService.load().subscribe(
      (entity1List) => {
        this.entity1ListSubject.next(entity1List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
