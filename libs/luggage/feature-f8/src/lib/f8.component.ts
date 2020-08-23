import { Component, OnInit} from '@angular/core';
import { F8Facade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-f8',
  templateUrl: './f8.component.html',
  styleUrls: ['./f8.component.scss']
})
export class F8Component implements OnInit {
    
    
    entity8List$ = this.f8Facade.entity8List$;


    constructor(private f8Facade: F8Facade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.f8Facade.load();
    }

}

