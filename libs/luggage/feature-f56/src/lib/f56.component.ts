import { Component, OnInit} from '@angular/core';
import { F56Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f56',
  templateUrl: './f56.component.html',
  styleUrls: ['./f56.component.scss']
})
export class F56Component implements OnInit {
    
    
    entity56List$ = this.f56Facade.entity56List$;


    constructor(private f56Facade: F56Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f56Facade.load();
    }

}

