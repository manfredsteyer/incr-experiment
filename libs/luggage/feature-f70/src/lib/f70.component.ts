import { Component, OnInit} from '@angular/core';
import { F70Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f70',
  templateUrl: './f70.component.html',
  styleUrls: ['./f70.component.scss']
})
export class F70Component implements OnInit {
    
    
    entity70List$ = this.f70Facade.entity70List$;


    constructor(private f70Facade: F70Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f70Facade.load();
    }

}

