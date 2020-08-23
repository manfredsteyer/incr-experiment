import { Component, OnInit} from '@angular/core';
import { F28Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f28',
  templateUrl: './f28.component.html',
  styleUrls: ['./f28.component.scss']
})
export class F28Component implements OnInit {
    
    
    entity28List$ = this.f28Facade.entity28List$;


    constructor(private f28Facade: F28Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f28Facade.load();
    }

}

