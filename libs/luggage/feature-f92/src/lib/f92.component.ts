import { Component, OnInit} from '@angular/core';
import { F92Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f92',
  templateUrl: './f92.component.html',
  styleUrls: ['./f92.component.scss']
})
export class F92Component implements OnInit {
    
    
    entity92List$ = this.f92Facade.entity92List$;


    constructor(private f92Facade: F92Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f92Facade.load();
    }

}

