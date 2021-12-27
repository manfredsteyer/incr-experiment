import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity52 } from '../entities/entity52';
import { Entity52DataService } from '../infrastructure/entity52.data.service';

@Injectable({ providedIn: 'root' })
export class F52Facade {
  private entity52ListSubject = new BehaviorSubject<Entity52[]>([]);
  entity52List$ = this.entity52ListSubject.asObservable();

  constructor(private entity52DataService: Entity52DataService) {}

  load(): void {
    this.entity52DataService.load().subscribe(
      (entity52List) => {
        this.entity52ListSubject.next(entity52List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
