import { Component, OnInit} from '@angular/core';
import { F76Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f76',
  templateUrl: './f76.component.html',
  styleUrls: ['./f76.component.scss']
})
export class F76Component implements OnInit {
    
    
    entity76List$ = this.f76Facade.entity76List$;


    constructor(private f76Facade: F76Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f76Facade.load();
    }

}

