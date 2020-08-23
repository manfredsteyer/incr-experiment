import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity53 } from '../entities/entity53';
import { Entity53DataService } from '../infrastructure/entity53.data.service';


@Injectable({ providedIn: 'root' })
export class F53Facade {

    private entity53ListSubject = new BehaviorSubject<Entity53[]>([]); 
    entity53List$ = this.entity53ListSubject.asObservable();

    constructor(private entity53DataService: Entity53DataService) {
    }

    load(): void {
        this.entity53DataService.load().subscribe(
            entity53List => {
                this.entity53ListSubject.next(entity53List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
