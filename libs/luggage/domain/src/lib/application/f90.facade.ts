import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity90 } from '../entities/entity90';
import { Entity90DataService } from '../infrastructure/entity90.data.service';


@Injectable({ providedIn: 'root' })
export class F90Facade {

    private entity90ListSubject = new BehaviorSubject<Entity90[]>([]); 
    entity90List$ = this.entity90ListSubject.asObservable();

    constructor(private entity90DataService: Entity90DataService) {
    }

    load(): void {
        this.entity90DataService.load().subscribe(
            entity90List => {
                this.entity90ListSubject.next(entity90List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
