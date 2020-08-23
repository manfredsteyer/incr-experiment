import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature51-component16',
  templateUrl: './feature51-component16.component.html',
  styleUrls: ['./feature51-component16.component.scss']
})
export class Feature51Component16Component implements OnInit {

    luggageList$ = this.checkinFacade.luggageList$;

    constructor(private checkinFacade: CheckinFacade) {
    }
    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.checkinFacade.load();
    }

}
