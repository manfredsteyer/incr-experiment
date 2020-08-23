import { Component, OnInit} from '@angular/core';
import { F100Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f100',
  templateUrl: './f100.component.html',
  styleUrls: ['./f100.component.scss']
})
export class F100Component implements OnInit {
    
    
    entity100List$ = this.f100Facade.entity100List$;


    constructor(private f100Facade: F100Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f100Facade.load();
    }

}

