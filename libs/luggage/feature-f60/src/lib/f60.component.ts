import { Component, OnInit} from '@angular/core';
import { F60Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f60',
  templateUrl: './f60.component.html',
  styleUrls: ['./f60.component.scss']
})
export class F60Component implements OnInit {
    
    
    entity60List$ = this.f60Facade.entity60List$;


    constructor(private f60Facade: F60Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f60Facade.load();
    }

}

