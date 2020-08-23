import { Component, OnInit} from '@angular/core';
import { F44Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f44',
  templateUrl: './f44.component.html',
  styleUrls: ['./f44.component.scss']
})
export class F44Component implements OnInit {
    
    
    entity44List$ = this.f44Facade.entity44List$;


    constructor(private f44Facade: F44Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f44Facade.load();
    }

}

