import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity95 } from '../entities/entity95';
import { Entity95DataService } from '../infrastructure/entity95.data.service';


@Injectable({ providedIn: 'root' })
export class F95Facade {

    private entity95ListSubject = new BehaviorSubject<Entity95[]>([]); 
    entity95List$ = this.entity95ListSubject.asObservable();

    constructor(private entity95DataService: Entity95DataService) {
    }

    load(): void {
        this.entity95DataService.load().subscribe(
            entity95List => {
                this.entity95ListSubject.next(entity95List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
