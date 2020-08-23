import { Component, OnInit} from '@angular/core';
import { F69Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f69',
  templateUrl: './f69.component.html',
  styleUrls: ['./f69.component.scss']
})
export class F69Component implements OnInit {
    
    
    entity69List$ = this.f69Facade.entity69List$;


    constructor(private f69Facade: F69Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f69Facade.load();
    }

}

