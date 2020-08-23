import { Component, OnInit} from '@angular/core';
import { F9Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f9',
  templateUrl: './f9.component.html',
  styleUrls: ['./f9.component.scss']
})
export class F9Component implements OnInit {
    
    
    entity9List$ = this.f9Facade.entity9List$;


    constructor(private f9Facade: F9Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f9Facade.load();
    }

}

