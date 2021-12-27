import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity66 } from '../entities/entity66';
import { Entity66DataService } from '../infrastructure/entity66.data.service';

@Injectable({ providedIn: 'root' })
export class F66Facade {
  private entity66ListSubject = new BehaviorSubject<Entity66[]>([]);
  entity66List$ = this.entity66ListSubject.asObservable();

  constructor(private entity66DataService: Entity66DataService) {}

  load(): void {
    this.entity66DataService.load().subscribe(
      (entity66List) => {
        this.entity66ListSubject.next(entity66List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
