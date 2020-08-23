import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity27 } from '../entities/entity27';
import { Entity27DataService } from '../infrastructure/entity27.data.service';


@Injectable({ providedIn: 'root' })
export class F27Facade {

    private entity27ListSubject = new BehaviorSubject<Entity27[]>([]); 
    entity27List$ = this.entity27ListSubject.asObservable();

    constructor(private entity27DataService: Entity27DataService) {
    }

    load(): void {
        this.entity27DataService.load().subscribe(
            entity27List => {
                this.entity27ListSubject.next(entity27List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
