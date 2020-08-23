import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity76 } from '../entities/entity76';
import { Entity76DataService } from '../infrastructure/entity76.data.service';


@Injectable({ providedIn: 'root' })
export class F76Facade {

    private entity76ListSubject = new BehaviorSubject<Entity76[]>([]); 
    entity76List$ = this.entity76ListSubject.asObservable();

    constructor(private entity76DataService: Entity76DataService) {
    }

    load(): void {
        this.entity76DataService.load().subscribe(
            entity76List => {
                this.entity76ListSubject.next(entity76List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
