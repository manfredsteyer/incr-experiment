import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity32 } from '../entities/entity32';
import { Entity32DataService } from '../infrastructure/entity32.data.service';


@Injectable({ providedIn: 'root' })
export class F32Facade {

    private entity32ListSubject = new BehaviorSubject<Entity32[]>([]); 
    entity32List$ = this.entity32ListSubject.asObservable();

    constructor(private entity32DataService: Entity32DataService) {
    }

    load(): void {
        this.entity32DataService.load().subscribe(
            entity32List => {
                this.entity32ListSubject.next(entity32List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
