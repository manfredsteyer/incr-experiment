import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity86 } from '../entities/entity86';
import { Entity86DataService } from '../infrastructure/entity86.data.service';


@Injectable({ providedIn: 'root' })
export class F86Facade {

    private entity86ListSubject = new BehaviorSubject<Entity86[]>([]); 
    entity86List$ = this.entity86ListSubject.asObservable();

    constructor(private entity86DataService: Entity86DataService) {
    }

    load(): void {
        this.entity86DataService.load().subscribe(
            entity86List => {
                this.entity86ListSubject.next(entity86List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
