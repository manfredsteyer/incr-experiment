import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity23 } from '../entities/entity23';
import { Entity23DataService } from '../infrastructure/entity23.data.service';


@Injectable({ providedIn: 'root' })
export class F23Facade {

    private entity23ListSubject = new BehaviorSubject<Entity23[]>([]); 
    entity23List$ = this.entity23ListSubject.asObservable();

    constructor(private entity23DataService: Entity23DataService) {
    }

    load(): void {
        this.entity23DataService.load().subscribe(
            entity23List => {
                this.entity23ListSubject.next(entity23List)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
