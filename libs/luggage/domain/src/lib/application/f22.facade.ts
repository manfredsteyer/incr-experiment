import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity22 } from '../entities/entity22';
import { Entity22DataService } from '../infrastructure/entity22.data.service';

@Injectable({ providedIn: 'root' })
export class F22Facade {
  private entity22ListSubject = new BehaviorSubject<Entity22[]>([]);
  entity22List$ = this.entity22ListSubject.asObservable();

  constructor(private entity22DataService: Entity22DataService) {}

  load(): void {
    this.entity22DataService.load().subscribe(
      (entity22List) => {
        this.entity22ListSubject.next(entity22List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
