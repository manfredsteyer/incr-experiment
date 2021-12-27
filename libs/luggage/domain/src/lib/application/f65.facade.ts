import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity65 } from '../entities/entity65';
import { Entity65DataService } from '../infrastructure/entity65.data.service';

@Injectable({ providedIn: 'root' })
export class F65Facade {
  private entity65ListSubject = new BehaviorSubject<Entity65[]>([]);
  entity65List$ = this.entity65ListSubject.asObservable();

  constructor(private entity65DataService: Entity65DataService) {}

  load(): void {
    this.entity65DataService.load().subscribe(
      (entity65List) => {
        this.entity65ListSubject.next(entity65List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
