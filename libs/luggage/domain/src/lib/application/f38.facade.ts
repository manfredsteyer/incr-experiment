import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity38 } from '../entities/entity38';
import { Entity38DataService } from '../infrastructure/entity38.data.service';

@Injectable({ providedIn: 'root' })
export class F38Facade {
  private entity38ListSubject = new BehaviorSubject<Entity38[]>([]);
  entity38List$ = this.entity38ListSubject.asObservable();

  constructor(private entity38DataService: Entity38DataService) {}

  load(): void {
    this.entity38DataService.load().subscribe(
      (entity38List) => {
        this.entity38ListSubject.next(entity38List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
