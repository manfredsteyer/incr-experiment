import { Component, OnInit} from '@angular/core';
import { F64Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f64',
  templateUrl: './f64.component.html',
  styleUrls: ['./f64.component.scss']
})
export class F64Component implements OnInit {
    
    
    entity64List$ = this.f64Facade.entity64List$;


    constructor(private f64Facade: F64Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f64Facade.load();
    }

}

