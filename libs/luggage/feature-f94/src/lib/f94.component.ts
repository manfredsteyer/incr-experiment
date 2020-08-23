import { Component, OnInit} from '@angular/core';
import { F94Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f94',
  templateUrl: './f94.component.html',
  styleUrls: ['./f94.component.scss']
})
export class F94Component implements OnInit {
    
    
    entity94List$ = this.f94Facade.entity94List$;


    constructor(private f94Facade: F94Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f94Facade.load();
    }

}

