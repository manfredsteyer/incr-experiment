import { Component, OnInit} from '@angular/core';
import { F18Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f18',
  templateUrl: './f18.component.html',
  styleUrls: ['./f18.component.scss']
})
export class F18Component implements OnInit {
    
    
    entity18List$ = this.f18Facade.entity18List$;


    constructor(private f18Facade: F18Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f18Facade.load();
    }

}

