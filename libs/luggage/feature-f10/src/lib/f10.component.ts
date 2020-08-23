import { Component, OnInit} from '@angular/core';
import { F10Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f10',
  templateUrl: './f10.component.html',
  styleUrls: ['./f10.component.scss']
})
export class F10Component implements OnInit {
    
    
    entity10List$ = this.f10Facade.entity10List$;


    constructor(private f10Facade: F10Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f10Facade.load();
    }

}

