import { Component, OnInit} from '@angular/core';
import { F85Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f85',
  templateUrl: './f85.component.html',
  styleUrls: ['./f85.component.scss']
})
export class F85Component implements OnInit {
    
    
    entity85List$ = this.f85Facade.entity85List$;


    constructor(private f85Facade: F85Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f85Facade.load();
    }

}

