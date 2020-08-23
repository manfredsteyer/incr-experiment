import { Component, OnInit} from '@angular/core';
import { F82Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f82',
  templateUrl: './f82.component.html',
  styleUrls: ['./f82.component.scss']
})
export class F82Component implements OnInit {
    
    
    entity82List$ = this.f82Facade.entity82List$;


    constructor(private f82Facade: F82Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f82Facade.load();
    }

}

