import { Component, OnInit} from '@angular/core';
import { F14Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f14',
  templateUrl: './f14.component.html',
  styleUrls: ['./f14.component.scss']
})
export class F14Component implements OnInit {
    
    
    entity14List$ = this.f14Facade.entity14List$;


    constructor(private f14Facade: F14Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f14Facade.load();
    }

}

