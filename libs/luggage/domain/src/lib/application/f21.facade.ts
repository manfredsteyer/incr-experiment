import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity21 } from '../entities/entity21';
import { Entity21DataService } from '../infrastructure/entity21.data.service';


@Injectable({ providedIn: 'root' })
export class F21Facade {

    private entity21ListSubject = new BehaviorSubject<Entity21[]>([]); 
    entity21List$ = this.entity21ListSubject.asObservable();

    constructor(private entity21DataService: Entity21DataService) {
    }

    load(): void {
        this.entity21DataService.load().subscribe(
            entity21List => {
                this.entity21ListSubject.next(entity21List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
