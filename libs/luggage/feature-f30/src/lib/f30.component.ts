import { Component, OnInit} from '@angular/core';
import { F30Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f30',
  templateUrl: './f30.component.html',
  styleUrls: ['./f30.component.scss']
})
export class F30Component implements OnInit {
    
    
    entity30List$ = this.f30Facade.entity30List$;


    constructor(private f30Facade: F30Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f30Facade.load();
    }

}

