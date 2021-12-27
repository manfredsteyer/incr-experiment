import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity93 } from '../entities/entity93';
import { Entity93DataService } from '../infrastructure/entity93.data.service';

@Injectable({ providedIn: 'root' })
export class F93Facade {
  private entity93ListSubject = new BehaviorSubject<Entity93[]>([]);
  entity93List$ = this.entity93ListSubject.asObservable();

  constructor(private entity93DataService: Entity93DataService) {}

  load(): void {
    this.entity93DataService.load().subscribe(
      (entity93List) => {
        this.entity93ListSubject.next(entity93List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
