import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity57 } from '../entities/entity57';
import { Entity57DataService } from '../infrastructure/entity57.data.service';


@Injectable({ providedIn: 'root' })
export class F57Facade {

    private entity57ListSubject = new BehaviorSubject<Entity57[]>([]); 
    entity57List$ = this.entity57ListSubject.asObservable();

    constructor(private entity57DataService: Entity57DataService) {
    }

    load(): void {
        this.entity57DataService.load().subscribe(
            entity57List => {
                this.entity57ListSubject.next(entity57List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
