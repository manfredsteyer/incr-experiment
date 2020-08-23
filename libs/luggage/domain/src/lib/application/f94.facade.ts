import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity94 } from '../entities/entity94';
import { Entity94DataService } from '../infrastructure/entity94.data.service';


@Injectable({ providedIn: 'root' })
export class F94Facade {

    private entity94ListSubject = new BehaviorSubject<Entity94[]>([]); 
    entity94List$ = this.entity94ListSubject.asObservable();

    constructor(private entity94DataService: Entity94DataService) {
    }

    load(): void {
        this.entity94DataService.load().subscribe(
            entity94List => {
                this.entity94ListSubject.next(entity94List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
