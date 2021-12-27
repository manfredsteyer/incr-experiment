import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity72 } from '../entities/entity72';
import { Entity72DataService } from '../infrastructure/entity72.data.service';

@Injectable({ providedIn: 'root' })
export class F72Facade {
  private entity72ListSubject = new BehaviorSubject<Entity72[]>([]);
  entity72List$ = this.entity72ListSubject.asObservable();

  constructor(private entity72DataService: Entity72DataService) {}

  load(): void {
    this.entity72DataService.load().subscribe(
      (entity72List) => {
        this.entity72ListSubject.next(entity72List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
