import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity26 } from '../entities/entity26';
import { Entity26DataService } from '../infrastructure/entity26.data.service';


@Injectable({ providedIn: 'root' })
export class F26Facade {

    private entity26ListSubject = new BehaviorSubject<Entity26[]>([]); 
    entity26List$ = this.entity26ListSubject.asObservable();

    constructor(private entity26DataService: Entity26DataService) {
    }

    load(): void {
        this.entity26DataService.load().subscribe(
            entity26List => {
                this.entity26ListSubject.next(entity26List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
