import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity81 } from '../entities/entity81';
import { Entity81DataService } from '../infrastructure/entity81.data.service';

@Injectable({ providedIn: 'root' })
export class F81Facade {
  private entity81ListSubject = new BehaviorSubject<Entity81[]>([]);
  entity81List$ = this.entity81ListSubject.asObservable();

  constructor(private entity81DataService: Entity81DataService) {}

  load(): void {
    this.entity81DataService.load().subscribe(
      (entity81List) => {
        this.entity81ListSubject.next(entity81List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
