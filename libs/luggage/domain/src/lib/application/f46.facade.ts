import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity46 } from '../entities/entity46';
import { Entity46DataService } from '../infrastructure/entity46.data.service';

@Injectable({ providedIn: 'root' })
export class F46Facade {
  private entity46ListSubject = new BehaviorSubject<Entity46[]>([]);
  entity46List$ = this.entity46ListSubject.asObservable();

  constructor(private entity46DataService: Entity46DataService) {}

  load(): void {
    this.entity46DataService.load().subscribe(
      (entity46List) => {
        this.entity46ListSubject.next(entity46List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
