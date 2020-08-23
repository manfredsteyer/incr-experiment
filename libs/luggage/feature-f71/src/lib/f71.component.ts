import { Component, OnInit} from '@angular/core';
import { F71Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f71',
  templateUrl: './f71.component.html',
  styleUrls: ['./f71.component.scss']
})
export class F71Component implements OnInit {
    
    
    entity71List$ = this.f71Facade.entity71List$;


    constructor(private f71Facade: F71Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f71Facade.load();
    }

}

