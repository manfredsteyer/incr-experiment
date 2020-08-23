import { Component, OnInit} from '@angular/core';
import { F57Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f57',
  templateUrl: './f57.component.html',
  styleUrls: ['./f57.component.scss']
})
export class F57Component implements OnInit {
    
    
    entity57List$ = this.f57Facade.entity57List$;


    constructor(private f57Facade: F57Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f57Facade.load();
    }

}

