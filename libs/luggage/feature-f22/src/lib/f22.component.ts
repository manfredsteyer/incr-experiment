import { Component, OnInit} from '@angular/core';
import { F22Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f22',
  templateUrl: './f22.component.html',
  styleUrls: ['./f22.component.scss']
})
export class F22Component implements OnInit {
    
    
    entity22List$ = this.f22Facade.entity22List$;


    constructor(private f22Facade: F22Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f22Facade.load();
    }

}

