import { Component, OnInit} from '@angular/core';
import { F21Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f21',
  templateUrl: './f21.component.html',
  styleUrls: ['./f21.component.scss']
})
export class F21Component implements OnInit {
    
    
    entity21List$ = this.f21Facade.entity21List$;


    constructor(private f21Facade: F21Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f21Facade.load();
    }

}

