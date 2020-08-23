import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity36 } from '../entities/entity36';
import { Entity36DataService } from '../infrastructure/entity36.data.service';


@Injectable({ providedIn: 'root' })
export class F36Facade {

    private entity36ListSubject = new BehaviorSubject<Entity36[]>([]); 
    entity36List$ = this.entity36ListSubject.asObservable();

    constructor(private entity36DataService: Entity36DataService) {
    }

    load(): void {
        this.entity36DataService.load().subscribe(
            entity36List => {
                this.entity36ListSubject.next(entity36List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
