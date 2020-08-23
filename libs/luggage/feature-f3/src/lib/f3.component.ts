import { Component, OnInit} from '@angular/core';
import { F3Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f3',
  templateUrl: './f3.component.html',
  styleUrls: ['./f3.component.scss']
})
export class F3Component implements OnInit {
    
    
    entity3List$ = this.f3Facade.entity3List$;


    constructor(private f3Facade: F3Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f3Facade.load();
    }

}

