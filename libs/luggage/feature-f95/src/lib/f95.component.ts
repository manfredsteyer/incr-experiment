import { Component, OnInit} from '@angular/core';
import { F95Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f95',
  templateUrl: './f95.component.html',
  styleUrls: ['./f95.component.scss']
})
export class F95Component implements OnInit {
    
    
    entity95List$ = this.f95Facade.entity95List$;


    constructor(private f95Facade: F95Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f95Facade.load();
    }

}

