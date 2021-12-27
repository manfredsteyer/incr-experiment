import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity88 } from '../entities/entity88';
import { Entity88DataService } from '../infrastructure/entity88.data.service';

@Injectable({ providedIn: 'root' })
export class F88Facade {
  private entity88ListSubject = new BehaviorSubject<Entity88[]>([]);
  entity88List$ = this.entity88ListSubject.asObservable();

  constructor(private entity88DataService: Entity88DataService) {}

  load(): void {
    this.entity88DataService.load().subscribe(
      (entity88List) => {
        this.entity88ListSubject.next(entity88List);
      },
      (err) => {
        console.error('err', err);
      }
    );
  }
}
