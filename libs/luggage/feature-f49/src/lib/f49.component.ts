import { Component, OnInit} from '@angular/core';
import { F49Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f49',
  templateUrl: './f49.component.html',
  styleUrls: ['./f49.component.scss']
})
export class F49Component implements OnInit {
    
    
    entity49List$ = this.f49Facade.entity49List$;


    constructor(private f49Facade: F49Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f49Facade.load();
    }

}

