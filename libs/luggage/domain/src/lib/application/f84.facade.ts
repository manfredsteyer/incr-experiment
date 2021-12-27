import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity84 } from '../entities/entity84';
import { Entity84DataService } from '../infrastructure/entity84.data.service';

@Injectable({ providedIn: 'root' })
export class F84Facade {
  private entity84ListSubject = new BehaviorSubject<Entity84[]>([]);
  entity84List$ = this.entity84ListSubject.asObservable();

  constructor(private entity84DataService: Entity84DataService) {}

  load(): void {
    this.entity84DataService.load().subscribe(
      (entity84List) => {
        this.entity84ListSubject.next(entity84List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
