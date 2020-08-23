import { Component, OnInit} from '@angular/core';
import { F59Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f59',
  templateUrl: './f59.component.html',
  styleUrls: ['./f59.component.scss']
})
export class F59Component implements OnInit {
    
    
    entity59List$ = this.f59Facade.entity59List$;


    constructor(private f59Facade: F59Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f59Facade.load();
    }

}

