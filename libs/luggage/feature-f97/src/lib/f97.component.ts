import { Component, OnInit} from '@angular/core';
import { F97Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f97',
  templateUrl: './f97.component.html',
  styleUrls: ['./f97.component.scss']
})
export class F97Component implements OnInit {
    
    
    entity97List$ = this.f97Facade.entity97List$;


    constructor(private f97Facade: F97Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f97Facade.load();
    }

}

