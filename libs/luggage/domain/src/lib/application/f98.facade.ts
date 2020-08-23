import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity98 } from '../entities/entity98';
import { Entity98DataService } from '../infrastructure/entity98.data.service';


@Injectable({ providedIn: 'root' })
export class F98Facade {

    private entity98ListSubject = new BehaviorSubject<Entity98[]>([]); 
    entity98List$ = this.entity98ListSubject.asObservable();

    constructor(private entity98DataService: Entity98DataService) {
    }

    load(): void {
        this.entity98DataService.load().subscribe(
            entity98List => {
                this.entity98ListSubject.next(entity98List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
