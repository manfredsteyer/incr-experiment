import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity83 } from '../entities/entity83';
import { Entity83DataService } from '../infrastructure/entity83.data.service';


@Injectable({ providedIn: 'root' })
export class F83Facade {

    private entity83ListSubject = new BehaviorSubject<Entity83[]>([]); 
    entity83List$ = this.entity83ListSubject.asObservable();

    constructor(private entity83DataService: Entity83DataService) {
    }

    load(): void {
        this.entity83DataService.load().subscribe(
            entity83List => {
                this.entity83ListSubject.next(entity83List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
