import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity67 } from '../entities/entity67';
import { Entity67DataService } from '../infrastructure/entity67.data.service';


@Injectable({ providedIn: 'root' })
export class F67Facade {

    private entity67ListSubject = new BehaviorSubject<Entity67[]>([]); 
    entity67List$ = this.entity67ListSubject.asObservable();

    constructor(private entity67DataService: Entity67DataService) {
    }

    load(): void {
        this.entity67DataService.load().subscribe(
            entity67List => {
                this.entity67ListSubject.next(entity67List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
