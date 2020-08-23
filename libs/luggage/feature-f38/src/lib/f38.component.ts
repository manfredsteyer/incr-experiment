import { Component, OnInit} from '@angular/core';
import { F38Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f38',
  templateUrl: './f38.component.html',
  styleUrls: ['./f38.component.scss']
})
export class F38Component implements OnInit {
    
    
    entity38List$ = this.f38Facade.entity38List$;


    constructor(private f38Facade: F38Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f38Facade.load();
    }

}

