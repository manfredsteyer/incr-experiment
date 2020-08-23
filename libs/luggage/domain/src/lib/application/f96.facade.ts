import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity96 } from '../entities/entity96';
import { Entity96DataService } from '../infrastructure/entity96.data.service';


@Injectable({ providedIn: 'root' })
export class F96Facade {

    private entity96ListSubject = new BehaviorSubject<Entity96[]>([]); 
    entity96List$ = this.entity96ListSubject.asObservable();

    constructor(private entity96DataService: Entity96DataService) {
    }

    load(): void {
        this.entity96DataService.load().subscribe(
            entity96List => {
                this.entity96ListSubject.next(entity96List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
