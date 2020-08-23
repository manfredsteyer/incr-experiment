import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity77 } from '../entities/entity77';
import { Entity77DataService } from '../infrastructure/entity77.data.service';


@Injectable({ providedIn: 'root' })
export class F77Facade {

    private entity77ListSubject = new BehaviorSubject<Entity77[]>([]); 
    entity77List$ = this.entity77ListSubject.asObservable();

    constructor(private entity77DataService: Entity77DataService) {
    }

    load(): void {
        this.entity77DataService.load().subscribe(
            entity77List => {
                this.entity77ListSubject.next(entity77List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
