import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity43 } from '../entities/entity43';
import { Entity43DataService } from '../infrastructure/entity43.data.service';


@Injectable({ providedIn: 'root' })
export class F43Facade {

    private entity43ListSubject = new BehaviorSubject<Entity43[]>([]); 
    entity43List$ = this.entity43ListSubject.asObservable();

    constructor(private entity43DataService: Entity43DataService) {
    }

    load(): void {
        this.entity43DataService.load().subscribe(
            entity43List => {
                this.entity43ListSubject.next(entity43List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
