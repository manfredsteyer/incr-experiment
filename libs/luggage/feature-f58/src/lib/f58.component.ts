import { Component, OnInit} from '@angular/core';
import { F58Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f58',
  templateUrl: './f58.component.html',
  styleUrls: ['./f58.component.scss']
})
export class F58Component implements OnInit {
    
    
    entity58List$ = this.f58Facade.entity58List$;


    constructor(private f58Facade: F58Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f58Facade.load();
    }

}

