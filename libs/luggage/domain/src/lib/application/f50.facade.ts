import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity50 } from '../entities/entity50';
import { Entity50DataService } from '../infrastructure/entity50.data.service';

@Injectable({ providedIn: 'root' })
export class F50Facade {
  private entity50ListSubject = new BehaviorSubject<Entity50[]>([]);
  entity50List$ = this.entity50ListSubject.asObservable();

  constructor(private entity50DataService: Entity50DataService) {}

  load(): void {
    this.entity50DataService.load().subscribe(
      (entity50List) => {
        this.entity50ListSubject.next(entity50List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
