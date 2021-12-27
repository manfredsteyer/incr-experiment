import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity56 } from '../entities/entity56';
import { Entity56DataService } from '../infrastructure/entity56.data.service';

@Injectable({ providedIn: 'root' })
export class F56Facade {
  private entity56ListSubject = new BehaviorSubject<Entity56[]>([]);
  entity56List$ = this.entity56ListSubject.asObservable();

  constructor(private entity56DataService: Entity56DataService) {}

  load(): void {
    this.entity56DataService.load().subscribe(
      (entity56List) => {
        this.entity56ListSubject.next(entity56List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
