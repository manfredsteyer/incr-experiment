import { Component, OnInit} from '@angular/core';
import { F55Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f55',
  templateUrl: './f55.component.html',
  styleUrls: ['./f55.component.scss']
})
export class F55Component implements OnInit {
    
    
    entity55List$ = this.f55Facade.entity55List$;


    constructor(private f55Facade: F55Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f55Facade.load();
    }

}

