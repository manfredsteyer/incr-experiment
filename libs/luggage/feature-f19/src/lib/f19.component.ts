import { Component, OnInit} from '@angular/core';
import { F19Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f19',
  templateUrl: './f19.component.html',
  styleUrls: ['./f19.component.scss']
})
export class F19Component implements OnInit {
    
    
    entity19List$ = this.f19Facade.entity19List$;


    constructor(private f19Facade: F19Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f19Facade.load();
    }

}

