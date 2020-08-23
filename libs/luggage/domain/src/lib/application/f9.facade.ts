import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity9 } from '../entities/entity9';
import { Entity9DataService } from '../infrastructure/entity9.data.service';


@Injectable({ providedIn: 'root' })
export class F9Facade {

    private entity9ListSubject = new BehaviorSubject<Entity9[]>([]); 
    entity9List$ = this.entity9ListSubject.asObservable();

    constructor(private entity9DataService: Entity9DataService) {
    }

    load(): void {
        this.entity9DataService.load().subscribe(
            entity9List => {
                this.entity9ListSubject.next(entity9List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
