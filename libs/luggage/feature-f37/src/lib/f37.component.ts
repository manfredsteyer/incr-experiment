import { Component, OnInit} from '@angular/core';
import { F37Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f37',
  templateUrl: './f37.component.html',
  styleUrls: ['./f37.component.scss']
})
export class F37Component implements OnInit {
    
    
    entity37List$ = this.f37Facade.entity37List$;


    constructor(private f37Facade: F37Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f37Facade.load();
    }

}

