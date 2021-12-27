import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity34 } from '../entities/entity34';
import { Entity34DataService } from '../infrastructure/entity34.data.service';

@Injectable({ providedIn: 'root' })
export class F34Facade {
  private entity34ListSubject = new BehaviorSubject<Entity34[]>([]);
  entity34List$ = this.entity34ListSubject.asObservable();

  constructor(private entity34DataService: Entity34DataService) {}

  load(): void {
    this.entity34DataService.load().subscribe(
      (entity34List) => {
        this.entity34ListSubject.next(entity34List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
