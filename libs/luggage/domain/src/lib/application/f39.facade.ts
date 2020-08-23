import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity39 } from '../entities/entity39';
import { Entity39DataService } from '../infrastructure/entity39.data.service';


@Injectable({ providedIn: 'root' })
export class F39Facade {

    private entity39ListSubject = new BehaviorSubject<Entity39[]>([]); 
    entity39List$ = this.entity39ListSubject.asObservable();

    constructor(private entity39DataService: Entity39DataService) {
    }

    load(): void {
        this.entity39DataService.load().subscribe(
            entity39List => {
                this.entity39ListSubject.next(entity39List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
