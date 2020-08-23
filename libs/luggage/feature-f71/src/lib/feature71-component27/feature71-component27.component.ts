import { Component, OnInit} from '@angular/core';
import { CheckinFacade } from '@flights/luggage/domain';

@Component({
  selector: 'luggage-feature71-component27',
  templateUrl: './feature71-component27.component.html',
  styleUrls: ['./feature71-component27.component.scss']
})
export class Feature71Component27Component implements OnInit {

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