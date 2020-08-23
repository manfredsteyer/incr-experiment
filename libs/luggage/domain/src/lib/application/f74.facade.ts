import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity74 } from '../entities/entity74';
import { Entity74DataService } from '../infrastructure/entity74.data.service';


@Injectable({ providedIn: 'root' })
export class F74Facade {

    private entity74ListSubject = new BehaviorSubject<Entity74[]>([]); 
    entity74List$ = this.entity74ListSubject.asObservable();

    constructor(private entity74DataService: Entity74DataService) {
    }

    load(): void {
        this.entity74DataService.load().subscribe(
            entity74List => {
                this.entity74ListSubject.next(entity74List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
