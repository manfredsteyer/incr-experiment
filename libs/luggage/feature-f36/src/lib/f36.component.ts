import { Component, OnInit} from '@angular/core';
import { F36Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f36',
  templateUrl: './f36.component.html',
  styleUrls: ['./f36.component.scss']
})
export class F36Component implements OnInit {
    
    
    entity36List$ = this.f36Facade.entity36List$;


    constructor(private f36Facade: F36Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f36Facade.load();
    }

}

