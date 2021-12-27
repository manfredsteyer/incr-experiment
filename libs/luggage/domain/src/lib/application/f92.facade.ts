import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity92 } from '../entities/entity92';
import { Entity92DataService } from '../infrastructure/entity92.data.service';

@Injectable({ providedIn: 'root' })
export class F92Facade {
  private entity92ListSubject = new BehaviorSubject<Entity92[]>([]);
  entity92List$ = this.entity92ListSubject.asObservable();

  constructor(private entity92DataService: Entity92DataService) {}

  load(): void {
    this.entity92DataService.load().subscribe(
      (entity92List) => {
        this.entity92ListSubject.next(entity92List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
