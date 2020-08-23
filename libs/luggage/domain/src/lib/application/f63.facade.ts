import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity63 } from '../entities/entity63';
import { Entity63DataService } from '../infrastructure/entity63.data.service';


@Injectable({ providedIn: 'root' })
export class F63Facade {

    private entity63ListSubject = new BehaviorSubject<Entity63[]>([]); 
    entity63List$ = this.entity63ListSubject.asObservable();

    constructor(private entity63DataService: Entity63DataService) {
    }

    load(): void {
        this.entity63DataService.load().subscribe(
            entity63List => {
                this.entity63ListSubject.next(entity63List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
