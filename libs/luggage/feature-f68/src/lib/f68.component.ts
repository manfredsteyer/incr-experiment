import { Component, OnInit} from '@angular/core';
import { F68Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f68',
  templateUrl: './f68.component.html',
  styleUrls: ['./f68.component.scss']
})
export class F68Component implements OnInit {
    
    
    entity68List$ = this.f68Facade.entity68List$;


    constructor(private f68Facade: F68Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f68Facade.load();
    }

}

