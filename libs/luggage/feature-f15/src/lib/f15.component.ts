import { Component, OnInit} from '@angular/core';
import { F15Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f15',
  templateUrl: './f15.component.html',
  styleUrls: ['./f15.component.scss']
})
export class F15Component implements OnInit {
    
    
    entity15List$ = this.f15Facade.entity15List$;


    constructor(private f15Facade: F15Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f15Facade.load();
    }

}

