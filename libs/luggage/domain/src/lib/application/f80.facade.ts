import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity80 } from '../entities/entity80';
import { Entity80DataService } from '../infrastructure/entity80.data.service';

@Injectable({ providedIn: 'root' })
export class F80Facade {
  private entity80ListSubject = new BehaviorSubject<Entity80[]>([]);
  entity80List$ = this.entity80ListSubject.asObservable();

  constructor(private entity80DataService: Entity80DataService) {}

  load(): void {
    this.entity80DataService.load().subscribe(
      (entity80List) => {
        this.entity80ListSubject.next(entity80List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
