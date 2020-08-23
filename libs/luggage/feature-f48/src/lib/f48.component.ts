import { Component, OnInit} from '@angular/core';
import { F48Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f48',
  templateUrl: './f48.component.html',
  styleUrls: ['./f48.component.scss']
})
export class F48Component implements OnInit {
    
    
    entity48List$ = this.f48Facade.entity48List$;


    constructor(private f48Facade: F48Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f48Facade.load();
    }

}

