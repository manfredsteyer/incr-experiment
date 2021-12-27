import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity68 } from '../entities/entity68';
import { Entity68DataService } from '../infrastructure/entity68.data.service';

@Injectable({ providedIn: 'root' })
export class F68Facade {
  private entity68ListSubject = new BehaviorSubject<Entity68[]>([]);
  entity68List$ = this.entity68ListSubject.asObservable();

  constructor(private entity68DataService: Entity68DataService) {}

  load(): void {
    this.entity68DataService.load().subscribe(
      (entity68List) => {
        this.entity68ListSubject.next(entity68List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
