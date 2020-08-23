import { Component, OnInit} from '@angular/core';
import { F75Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f75',
  templateUrl: './f75.component.html',
  styleUrls: ['./f75.component.scss']
})
export class F75Component implements OnInit {
    
    
    entity75List$ = this.f75Facade.entity75List$;


    constructor(private f75Facade: F75Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f75Facade.load();
    }

}

