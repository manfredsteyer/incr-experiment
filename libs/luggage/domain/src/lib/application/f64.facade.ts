import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity64 } from '../entities/entity64';
import { Entity64DataService } from '../infrastructure/entity64.data.service';


@Injectable({ providedIn: 'root' })
export class F64Facade {

    private entity64ListSubject = new BehaviorSubject<Entity64[]>([]); 
    entity64List$ = this.entity64ListSubject.asObservable();

    constructor(private entity64DataService: Entity64DataService) {
    }

    load(): void {
        this.entity64DataService.load().subscribe(
            entity64List => {
                this.entity64ListSubject.next(entity64List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
