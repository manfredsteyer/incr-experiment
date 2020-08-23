import { Component, OnInit} from '@angular/core';
import { F83Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f83',
  templateUrl: './f83.component.html',
  styleUrls: ['./f83.component.scss']
})
export class F83Component implements OnInit {
    
    
    entity83List$ = this.f83Facade.entity83List$;


    constructor(private f83Facade: F83Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f83Facade.load();
    }

}

