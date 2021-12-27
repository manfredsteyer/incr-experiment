import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity40 } from '../entities/entity40';
import { Entity40DataService } from '../infrastructure/entity40.data.service';

@Injectable({ providedIn: 'root' })
export class F40Facade {
  private entity40ListSubject = new BehaviorSubject<Entity40[]>([]);
  entity40List$ = this.entity40ListSubject.asObservable();

  constructor(private entity40DataService: Entity40DataService) {}

  load(): void {
    this.entity40DataService.load().subscribe(
      (entity40List) => {
        this.entity40ListSubject.next(entity40List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
