import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity91 } from '../entities/entity91';
import { Entity91DataService } from '../infrastructure/entity91.data.service';


@Injectable({ providedIn: 'root' })
export class F91Facade {

    private entity91ListSubject = new BehaviorSubject<Entity91[]>([]); 
    entity91List$ = this.entity91ListSubject.asObservable();

    constructor(private entity91DataService: Entity91DataService) {
    }

    load(): void {
        this.entity91DataService.load().subscribe(
            entity91List => {
                this.entity91ListSubject.next(entity91List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
