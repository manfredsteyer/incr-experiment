import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity44 } from '../entities/entity44';
import { Entity44DataService } from '../infrastructure/entity44.data.service';

@Injectable({ providedIn: 'root' })
export class F44Facade {
  private entity44ListSubject = new BehaviorSubject<Entity44[]>([]);
  entity44List$ = this.entity44ListSubject.asObservable();

  constructor(private entity44DataService: Entity44DataService) {}

  load(): void {
    this.entity44DataService.load().subscribe(
      (entity44List) => {
        this.entity44ListSubject.next(entity44List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
