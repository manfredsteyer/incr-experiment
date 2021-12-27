import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity100 } from '../entities/entity100';
import { Entity100DataService } from '../infrastructure/entity100.data.service';

@Injectable({ providedIn: 'root' })
export class F100Facade {
  private entity100ListSubject = new BehaviorSubject<Entity100[]>([]);
  entity100List$ = this.entity100ListSubject.asObservable();

  constructor(private entity100DataService: Entity100DataService) {}

  load(): void {
    this.entity100DataService.load().subscribe(
      (entity100List) => {
        this.entity100ListSubject.next(entity100List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
