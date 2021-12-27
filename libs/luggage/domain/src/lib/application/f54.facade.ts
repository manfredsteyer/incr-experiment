import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity54 } from '../entities/entity54';
import { Entity54DataService } from '../infrastructure/entity54.data.service';

@Injectable({ providedIn: 'root' })
export class F54Facade {
  private entity54ListSubject = new BehaviorSubject<Entity54[]>([]);
  entity54List$ = this.entity54ListSubject.asObservable();

  constructor(private entity54DataService: Entity54DataService) {}

  load(): void {
    this.entity54DataService.load().subscribe(
      (entity54List) => {
        this.entity54ListSubject.next(entity54List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
