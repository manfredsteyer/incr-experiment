import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity35 } from '../entities/entity35';
import { Entity35DataService } from '../infrastructure/entity35.data.service';

@Injectable({ providedIn: 'root' })
export class F35Facade {
  private entity35ListSubject = new BehaviorSubject<Entity35[]>([]);
  entity35List$ = this.entity35ListSubject.asObservable();

  constructor(private entity35DataService: Entity35DataService) {}

  load(): void {
    this.entity35DataService.load().subscribe(
      (entity35List) => {
        this.entity35ListSubject.next(entity35List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
