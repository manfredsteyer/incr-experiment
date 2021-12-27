import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity55 } from '../entities/entity55';
import { Entity55DataService } from '../infrastructure/entity55.data.service';

@Injectable({ providedIn: 'root' })
export class F55Facade {
  private entity55ListSubject = new BehaviorSubject<Entity55[]>([]);
  entity55List$ = this.entity55ListSubject.asObservable();

  constructor(private entity55DataService: Entity55DataService) {}

  load(): void {
    this.entity55DataService.load().subscribe(
      (entity55List) => {
        this.entity55ListSubject.next(entity55List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
