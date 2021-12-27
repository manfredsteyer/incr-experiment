import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity75 } from '../entities/entity75';
import { Entity75DataService } from '../infrastructure/entity75.data.service';

@Injectable({ providedIn: 'root' })
export class F75Facade {
  private entity75ListSubject = new BehaviorSubject<Entity75[]>([]);
  entity75List$ = this.entity75ListSubject.asObservable();

  constructor(private entity75DataService: Entity75DataService) {}

  load(): void {
    this.entity75DataService.load().subscribe(
      (entity75List) => {
        this.entity75ListSubject.next(entity75List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
