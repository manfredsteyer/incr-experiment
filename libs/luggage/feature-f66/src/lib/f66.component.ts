import { Component, OnInit} from '@angular/core';
import { F66Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f66',
  templateUrl: './f66.component.html',
  styleUrls: ['./f66.component.scss']
})
export class F66Component implements OnInit {
    
    
    entity66List$ = this.f66Facade.entity66List$;


    constructor(private f66Facade: F66Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f66Facade.load();
    }

}

