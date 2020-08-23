import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity87 } from '../entities/entity87';
import { Entity87DataService } from '../infrastructure/entity87.data.service';


@Injectable({ providedIn: 'root' })
export class F87Facade {

    private entity87ListSubject = new BehaviorSubject<Entity87[]>([]); 
    entity87List$ = this.entity87ListSubject.asObservable();

    constructor(private entity87DataService: Entity87DataService) {
    }

    load(): void {
        this.entity87DataService.load().subscribe(
            entity87List => {
                this.entity87ListSubject.next(entity87List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
