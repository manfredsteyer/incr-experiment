import { Component, OnInit} from '@angular/core';
import { F52Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f52',
  templateUrl: './f52.component.html',
  styleUrls: ['./f52.component.scss']
})
export class F52Component implements OnInit {
    
    
    entity52List$ = this.f52Facade.entity52List$;


    constructor(private f52Facade: F52Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f52Facade.load();
    }

}

