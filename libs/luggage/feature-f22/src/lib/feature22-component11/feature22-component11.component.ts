import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature22-component11',
  templateUrl: './feature22-component11.component.html',
  styleUrls: ['./feature22-component11.component.scss']
})
export class Feature22Component11Component implements OnInit {

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