import { Component, OnInit} from '@angular/core';
import { F31Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f31',
  templateUrl: './f31.component.html',
  styleUrls: ['./f31.component.scss']
})
export class F31Component implements OnInit {
    
    
    entity31List$ = this.f31Facade.entity31List$;


    constructor(private f31Facade: F31Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f31Facade.load();
    }

}

