import { Component, OnInit} from '@angular/core';
import { F86Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f86',
  templateUrl: './f86.component.html',
  styleUrls: ['./f86.component.scss']
})
export class F86Component implements OnInit {
    
    
    entity86List$ = this.f86Facade.entity86List$;


    constructor(private f86Facade: F86Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f86Facade.load();
    }

}

