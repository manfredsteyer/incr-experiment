import { Component, OnInit} from '@angular/core';
import { F54Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f54',
  templateUrl: './f54.component.html',
  styleUrls: ['./f54.component.scss']
})
export class F54Component implements OnInit {
    
    
    entity54List$ = this.f54Facade.entity54List$;


    constructor(private f54Facade: F54Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f54Facade.load();
    }

}

