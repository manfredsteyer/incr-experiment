import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity28 } from '../entities/entity28';
import { Entity28DataService } from '../infrastructure/entity28.data.service';


@Injectable({ providedIn: 'root' })
export class F28Facade {

    private entity28ListSubject = new BehaviorSubject<Entity28[]>([]); 
    entity28List$ = this.entity28ListSubject.asObservable();

    constructor(private entity28DataService: Entity28DataService) {
    }

    load(): void {
        this.entity28DataService.load().subscribe(
            entity28List => {
                this.entity28ListSubject.next(entity28List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
