import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity0 } from '../entities/entity0';
import { Entity0DataService } from '../infrastructure/entity0.data.service';


@Injectable({ providedIn: 'root' })
export class F0Facade {

    private entity0ListSubject = new BehaviorSubject<Entity0[]>([]); 
    entity0List$ = this.entity0ListSubject.asObservable();

    constructor(private entity0DataService: Entity0DataService) {
    }

    load(): void {
        this.entity0DataService.load().subscribe(
            entity0List => {
                this.entity0ListSubject.next(entity0List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
