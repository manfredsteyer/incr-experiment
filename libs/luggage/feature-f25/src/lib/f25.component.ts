import { Component, OnInit} from '@angular/core';
import { F25Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f25',
  templateUrl: './f25.component.html',
  styleUrls: ['./f25.component.scss']
})
export class F25Component implements OnInit {
    
    
    entity25List$ = this.f25Facade.entity25List$;


    constructor(private f25Facade: F25Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f25Facade.load();
    }

}

