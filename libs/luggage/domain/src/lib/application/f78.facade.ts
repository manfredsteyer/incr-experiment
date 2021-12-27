import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity78 } from '../entities/entity78';
import { Entity78DataService } from '../infrastructure/entity78.data.service';

@Injectable({ providedIn: 'root' })
export class F78Facade {
  private entity78ListSubject = new BehaviorSubject<Entity78[]>([]);
  entity78List$ = this.entity78ListSubject.asObservable();

  constructor(private entity78DataService: Entity78DataService) {}

  load(): void {
    this.entity78DataService.load().subscribe(
      (entity78List) => {
        this.entity78ListSubject.next(entity78List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
