import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity73 } from '../entities/entity73';
import { Entity73DataService } from '../infrastructure/entity73.data.service';


@Injectable({ providedIn: 'root' })
export class F73Facade {

    private entity73ListSubject = new BehaviorSubject<Entity73[]>([]); 
    entity73List$ = this.entity73ListSubject.asObservable();

    constructor(private entity73DataService: Entity73DataService) {
    }

    load(): void {
        this.entity73DataService.load().subscribe(
            entity73List => {
                this.entity73ListSubject.next(entity73List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
