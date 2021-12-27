import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity89 } from '../entities/entity89';
import { Entity89DataService } from '../infrastructure/entity89.data.service';

@Injectable({ providedIn: 'root' })
export class F89Facade {
  private entity89ListSubject = new BehaviorSubject<Entity89[]>([]);
  entity89List$ = this.entity89ListSubject.asObservable();

  constructor(private entity89DataService: Entity89DataService) {}

  load(): void {
    this.entity89DataService.load().subscribe(
      (entity89List) => {
        this.entity89ListSubject.next(entity89List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
