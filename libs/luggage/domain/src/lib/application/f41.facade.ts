import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity41 } from '../entities/entity41';
import { Entity41DataService } from '../infrastructure/entity41.data.service';

@Injectable({ providedIn: 'root' })
export class F41Facade {
  private entity41ListSubject = new BehaviorSubject<Entity41[]>([]);
  entity41List$ = this.entity41ListSubject.asObservable();

  constructor(private entity41DataService: Entity41DataService) {}

  load(): void {
    this.entity41DataService.load().subscribe(
      (entity41List) => {
        this.entity41ListSubject.next(entity41List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
