import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity30 } from '../entities/entity30';
import { Entity30DataService } from '../infrastructure/entity30.data.service';


@Injectable({ providedIn: 'root' })
export class F30Facade {

    private entity30ListSubject = new BehaviorSubject<Entity30[]>([]); 
    entity30List$ = this.entity30ListSubject.asObservable();

    constructor(private entity30DataService: Entity30DataService) {
    }

    load(): void {
        this.entity30DataService.load().subscribe(
            entity30List => {
                this.entity30ListSubject.next(entity30List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
