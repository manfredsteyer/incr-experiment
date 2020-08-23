import { Component, OnInit} from '@angular/core';
import { F53Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f53',
  templateUrl: './f53.component.html',
  styleUrls: ['./f53.component.scss']
})
export class F53Component implements OnInit {
    
    
    entity53List$ = this.f53Facade.entity53List$;


    constructor(private f53Facade: F53Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f53Facade.load();
    }

}

