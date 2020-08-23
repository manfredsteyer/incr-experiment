import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity58 } from '../entities/entity58';
import { Entity58DataService } from '../infrastructure/entity58.data.service';


@Injectable({ providedIn: 'root' })
export class F58Facade {

    private entity58ListSubject = new BehaviorSubject<Entity58[]>([]); 
    entity58List$ = this.entity58ListSubject.asObservable();

    constructor(private entity58DataService: Entity58DataService) {
    }

    load(): void {
        this.entity58DataService.load().subscribe(
            entity58List => {
                this.entity58ListSubject.next(entity58List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
