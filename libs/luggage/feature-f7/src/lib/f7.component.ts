import { Component, OnInit} from '@angular/core';
import { F7Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f7',
  templateUrl: './f7.component.html',
  styleUrls: ['./f7.component.scss']
})
export class F7Component implements OnInit {
    
    
    entity7List$ = this.f7Facade.entity7List$;


    constructor(private f7Facade: F7Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f7Facade.load();
    }

}

