import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity42 } from '../entities/entity42';
import { Entity42DataService } from '../infrastructure/entity42.data.service';

@Injectable({ providedIn: 'root' })
export class F42Facade {
  private entity42ListSubject = new BehaviorSubject<Entity42[]>([]);
  entity42List$ = this.entity42ListSubject.asObservable();

  constructor(private entity42DataService: Entity42DataService) {}

  load(): void {
    this.entity42DataService.load().subscribe(
      (entity42List) => {
        this.entity42ListSubject.next(entity42List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
