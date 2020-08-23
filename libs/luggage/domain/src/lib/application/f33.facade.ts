import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity33 } from '../entities/entity33';
import { Entity33DataService } from '../infrastructure/entity33.data.service';


@Injectable({ providedIn: 'root' })
export class F33Facade {

    private entity33ListSubject = new BehaviorSubject<Entity33[]>([]); 
    entity33List$ = this.entity33ListSubject.asObservable();

    constructor(private entity33DataService: Entity33DataService) {
    }

    load(): void {
        this.entity33DataService.load().subscribe(
            entity33List => {
                this.entity33ListSubject.next(entity33List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
