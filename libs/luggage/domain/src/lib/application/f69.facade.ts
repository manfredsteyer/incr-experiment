import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity69 } from '../entities/entity69';
import { Entity69DataService } from '../infrastructure/entity69.data.service';

@Injectable({ providedIn: 'root' })
export class F69Facade {
  private entity69ListSubject = new BehaviorSubject<Entity69[]>([]);
  entity69List$ = this.entity69ListSubject.asObservable();

  constructor(private entity69DataService: Entity69DataService) {}

  load(): void {
    this.entity69DataService.load().subscribe(
      (entity69List) => {
        this.entity69ListSubject.next(entity69List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
