import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity82 } from '../entities/entity82';
import { Entity82DataService } from '../infrastructure/entity82.data.service';

@Injectable({ providedIn: 'root' })
export class F82Facade {
  private entity82ListSubject = new BehaviorSubject<Entity82[]>([]);
  entity82List$ = this.entity82ListSubject.asObservable();

  constructor(private entity82DataService: Entity82DataService) {}

  load(): void {
    this.entity82DataService.load().subscribe(
      (entity82List) => {
        this.entity82ListSubject.next(entity82List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
