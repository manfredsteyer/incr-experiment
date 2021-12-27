import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity8 } from '../entities/entity8';
import { Entity8DataService } from '../infrastructure/entity8.data.service';

@Injectable({ providedIn: 'root' })
export class F8Facade {
  private entity8ListSubject = new BehaviorSubject<Entity8[]>([]);
  entity8List$ = this.entity8ListSubject.asObservable();

  constructor(private entity8DataService: Entity8DataService) {}

  load(): void {
    this.entity8DataService.load().subscribe(
      (entity8List) => {
        this.entity8ListSubject.next(entity8List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
