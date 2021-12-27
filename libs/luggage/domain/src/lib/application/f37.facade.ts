import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity37 } from '../entities/entity37';
import { Entity37DataService } from '../infrastructure/entity37.data.service';

@Injectable({ providedIn: 'root' })
export class F37Facade {
  private entity37ListSubject = new BehaviorSubject<Entity37[]>([]);
  entity37List$ = this.entity37ListSubject.asObservable();

  constructor(private entity37DataService: Entity37DataService) {}

  load(): void {
    this.entity37DataService.load().subscribe(
      (entity37List) => {
        this.entity37ListSubject.next(entity37List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
