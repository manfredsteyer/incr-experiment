import { Component, OnInit} from '@angular/core';
import { F29Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f29',
  templateUrl: './f29.component.html',
  styleUrls: ['./f29.component.scss']
})
export class F29Component implements OnInit {
    
    
    entity29List$ = this.f29Facade.entity29List$;


    constructor(private f29Facade: F29Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f29Facade.load();
    }

}

