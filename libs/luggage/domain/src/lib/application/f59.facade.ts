import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity59 } from '../entities/entity59';
import { Entity59DataService } from '../infrastructure/entity59.data.service';


@Injectable({ providedIn: 'root' })
export class F59Facade {

    private entity59ListSubject = new BehaviorSubject<Entity59[]>([]); 
    entity59List$ = this.entity59ListSubject.asObservable();

    constructor(private entity59DataService: Entity59DataService) {
    }

    load(): void {
        this.entity59DataService.load().subscribe(
            entity59List => {
                this.entity59ListSubject.next(entity59List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
