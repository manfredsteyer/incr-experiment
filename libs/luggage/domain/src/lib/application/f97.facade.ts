import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity97 } from '../entities/entity97';
import { Entity97DataService } from '../infrastructure/entity97.data.service';


@Injectable({ providedIn: 'root' })
export class F97Facade {

    private entity97ListSubject = new BehaviorSubject<Entity97[]>([]); 
    entity97List$ = this.entity97ListSubject.asObservable();

    constructor(private entity97DataService: Entity97DataService) {
    }

    load(): void {
        this.entity97DataService.load().subscribe(
            entity97List => {
                this.entity97ListSubject.next(entity97List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
