import { Component, OnInit} from '@angular/core';
import { F17Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f17',
  templateUrl: './f17.component.html',
  styleUrls: ['./f17.component.scss']
})
export class F17Component implements OnInit {
    
    
    entity17List$ = this.f17Facade.entity17List$;


    constructor(private f17Facade: F17Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f17Facade.load();
    }

}

