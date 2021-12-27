import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity70 } from '../entities/entity70';
import { Entity70DataService } from '../infrastructure/entity70.data.service';

@Injectable({ providedIn: 'root' })
export class F70Facade {
  private entity70ListSubject = new BehaviorSubject<Entity70[]>([]);
  entity70List$ = this.entity70ListSubject.asObservable();

  constructor(private entity70DataService: Entity70DataService) {}

  load(): void {
    this.entity70DataService.load().subscribe(
      (entity70List) => {
        this.entity70ListSubject.next(entity70List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
