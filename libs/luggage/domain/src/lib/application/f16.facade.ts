import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity16 } from '../entities/entity16';
import { Entity16DataService } from '../infrastructure/entity16.data.service';


@Injectable({ providedIn: 'root' })
export class F16Facade {

    private entity16ListSubject = new BehaviorSubject<Entity16[]>([]); 
    entity16List$ = this.entity16ListSubject.asObservable();

    constructor(private entity16DataService: Entity16DataService) {
    }

    load(): void {
        this.entity16DataService.load().subscribe(
            entity16List => {
                this.entity16ListSubject.next(entity16List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
