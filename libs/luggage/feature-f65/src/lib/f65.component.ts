import { Component, OnInit} from '@angular/core';
import { F65Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f65',
  templateUrl: './f65.component.html',
  styleUrls: ['./f65.component.scss']
})
export class F65Component implements OnInit {
    
    
    entity65List$ = this.f65Facade.entity65List$;


    constructor(private f65Facade: F65Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f65Facade.load();
    }

}

