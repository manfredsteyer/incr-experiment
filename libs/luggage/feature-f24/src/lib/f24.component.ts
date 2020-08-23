import { Component, OnInit} from '@angular/core';
import { F24Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f24',
  templateUrl: './f24.component.html',
  styleUrls: ['./f24.component.scss']
})
export class F24Component implements OnInit {
    
    
    entity24List$ = this.f24Facade.entity24List$;


    constructor(private f24Facade: F24Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f24Facade.load();
    }

}

