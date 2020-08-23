import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity99 } from '../entities/entity99';
import { Entity99DataService } from '../infrastructure/entity99.data.service';


@Injectable({ providedIn: 'root' })
export class F99Facade {

    private entity99ListSubject = new BehaviorSubject<Entity99[]>([]); 
    entity99List$ = this.entity99ListSubject.asObservable();

    constructor(private entity99DataService: Entity99DataService) {
    }

    load(): void {
        this.entity99DataService.load().subscribe(
            entity99List => {
                this.entity99ListSubject.next(entity99List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
