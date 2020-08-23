import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity51 } from '../entities/entity51';
import { Entity51DataService } from '../infrastructure/entity51.data.service';


@Injectable({ providedIn: 'root' })
export class F51Facade {

    private entity51ListSubject = new BehaviorSubject<Entity51[]>([]); 
    entity51List$ = this.entity51ListSubject.asObservable();

    constructor(private entity51DataService: Entity51DataService) {
    }

    load(): void {
        this.entity51DataService.load().subscribe(
            entity51List => {
                this.entity51ListSubject.next(entity51List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
