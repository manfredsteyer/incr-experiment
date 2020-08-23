import { Component, OnInit} from '@angular/core';
import { F43Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f43',
  templateUrl: './f43.component.html',
  styleUrls: ['./f43.component.scss']
})
export class F43Component implements OnInit {
    
    
    entity43List$ = this.f43Facade.entity43List$;


    constructor(private f43Facade: F43Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f43Facade.load();
    }

}

