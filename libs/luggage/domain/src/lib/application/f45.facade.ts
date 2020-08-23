import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity45 } from '../entities/entity45';
import { Entity45DataService } from '../infrastructure/entity45.data.service';


@Injectable({ providedIn: 'root' })
export class F45Facade {

    private entity45ListSubject = new BehaviorSubject<Entity45[]>([]); 
    entity45List$ = this.entity45ListSubject.asObservable();

    constructor(private entity45DataService: Entity45DataService) {
    }

    load(): void {
        this.entity45DataService.load().subscribe(
            entity45List => {
                this.entity45ListSubject.next(entity45List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
