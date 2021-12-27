import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity25 } from '../entities/entity25';
import { Entity25DataService } from '../infrastructure/entity25.data.service';

@Injectable({ providedIn: 'root' })
export class F25Facade {
  private entity25ListSubject = new BehaviorSubject<Entity25[]>([]);
  entity25List$ = this.entity25ListSubject.asObservable();

  constructor(private entity25DataService: Entity25DataService) {}

  load(): void {
    this.entity25DataService.load().subscribe(
      (entity25List) => {
        this.entity25ListSubject.next(entity25List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
