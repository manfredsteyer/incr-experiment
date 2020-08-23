import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity47 } from '../entities/entity47';
import { Entity47DataService } from '../infrastructure/entity47.data.service';


@Injectable({ providedIn: 'root' })
export class F47Facade {

    private entity47ListSubject = new BehaviorSubject<Entity47[]>([]); 
    entity47List$ = this.entity47ListSubject.asObservable();

    constructor(private entity47DataService: Entity47DataService) {
    }

    load(): void {
        this.entity47DataService.load().subscribe(
            entity47List => {
                this.entity47ListSubject.next(entity47List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
