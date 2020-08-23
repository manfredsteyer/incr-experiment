import { Component, OnInit} from '@angular/core';
import { F74Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f74',
  templateUrl: './f74.component.html',
  styleUrls: ['./f74.component.scss']
})
export class F74Component implements OnInit {
    
    
    entity74List$ = this.f74Facade.entity74List$;


    constructor(private f74Facade: F74Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f74Facade.load();
    }

}

