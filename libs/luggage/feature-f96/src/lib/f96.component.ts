import { Component, OnInit} from '@angular/core';
import { F96Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f96',
  templateUrl: './f96.component.html',
  styleUrls: ['./f96.component.scss']
})
export class F96Component implements OnInit {
    
    
    entity96List$ = this.f96Facade.entity96List$;


    constructor(private f96Facade: F96Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f96Facade.load();
    }

}

