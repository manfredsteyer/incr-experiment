import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity49 } from '../entities/entity49';
import { Entity49DataService } from '../infrastructure/entity49.data.service';

@Injectable({ providedIn: 'root' })
export class F49Facade {
  private entity49ListSubject = new BehaviorSubject<Entity49[]>([]);
  entity49List$ = this.entity49ListSubject.asObservable();

  constructor(private entity49DataService: Entity49DataService) {}

  load(): void {
    this.entity49DataService.load().subscribe(
      (entity49List) => {
        this.entity49ListSubject.next(entity49List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
