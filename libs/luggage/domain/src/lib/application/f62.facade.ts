import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity62 } from '../entities/entity62';
import { Entity62DataService } from '../infrastructure/entity62.data.service';

@Injectable({ providedIn: 'root' })
export class F62Facade {
  private entity62ListSubject = new BehaviorSubject<Entity62[]>([]);
  entity62List$ = this.entity62ListSubject.asObservable();

  constructor(private entity62DataService: Entity62DataService) {}

  load(): void {
    this.entity62DataService.load().subscribe(
      (entity62List) => {
        this.entity62ListSubject.next(entity62List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
