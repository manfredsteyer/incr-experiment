import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity31 } from '../entities/entity31';
import { Entity31DataService } from '../infrastructure/entity31.data.service';


@Injectable({ providedIn: 'root' })
export class F31Facade {

    private entity31ListSubject = new BehaviorSubject<Entity31[]>([]); 
    entity31List$ = this.entity31ListSubject.asObservable();

    constructor(private entity31DataService: Entity31DataService) {
    }

    load(): void {
        this.entity31DataService.load().subscribe(
            entity31List => {
                this.entity31ListSubject.next(entity31List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
