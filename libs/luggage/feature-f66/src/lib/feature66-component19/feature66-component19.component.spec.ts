import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component19Component } from './feature66-component19.component';

describe('Feature66Component19Component', () => {
  let component: Feature66Component19Component;
  let fixture: ComponentFixture<Feature66Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
