import { Component, OnInit} from '@angular/core';
import { F78Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f78',
  templateUrl: './f78.component.html',
  styleUrls: ['./f78.component.scss']
})
export class F78Component implements OnInit {
    
    
    entity78List$ = this.f78Facade.entity78List$;


    constructor(private f78Facade: F78Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f78Facade.load();
    }

}

