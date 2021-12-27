import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity71 } from '../entities/entity71';
import { Entity71DataService } from '../infrastructure/entity71.data.service';

@Injectable({ providedIn: 'root' })
export class F71Facade {
  private entity71ListSubject = new BehaviorSubject<Entity71[]>([]);
  entity71List$ = this.entity71ListSubject.asObservable();

  constructor(private entity71DataService: Entity71DataService) {}

  load(): void {
    this.entity71DataService.load().subscribe(
      (entity71List) => {
        this.entity71ListSubject.next(entity71List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
