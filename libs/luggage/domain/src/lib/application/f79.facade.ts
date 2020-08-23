import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity79 } from '../entities/entity79';
import { Entity79DataService } from '../infrastructure/entity79.data.service';


@Injectable({ providedIn: 'root' })
export class F79Facade {

    private entity79ListSubject = new BehaviorSubject<Entity79[]>([]); 
    entity79List$ = this.entity79ListSubject.asObservable();

    constructor(private entity79DataService: Entity79DataService) {
    }

    load(): void {
        this.entity79DataService.load().subscribe(
            entity79List => {
                this.entity79ListSubject.next(entity79List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
