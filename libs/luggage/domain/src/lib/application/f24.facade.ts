import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity24 } from '../entities/entity24';
import { Entity24DataService } from '../infrastructure/entity24.data.service';


@Injectable({ providedIn: 'root' })
export class F24Facade {

    private entity24ListSubject = new BehaviorSubject<Entity24[]>([]); 
    entity24List$ = this.entity24ListSubject.asObservable();

    constructor(private entity24DataService: Entity24DataService) {
    }

    load(): void {
        this.entity24DataService.load().subscribe(
            entity24List => {
                this.entity24ListSubject.next(entity24List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
