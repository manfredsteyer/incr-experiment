import { Component, OnInit} from '@angular/core';
import { F11Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f11',
  templateUrl: './f11.component.html',
  styleUrls: ['./f11.component.scss']
})
export class F11Component implements OnInit {
    
    
    entity11List$ = this.f11Facade.entity11List$;


    constructor(private f11Facade: F11Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f11Facade.load();
    }

}

