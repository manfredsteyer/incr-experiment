import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component21Component } from './feature66-component21.component';

describe('Feature66Component21Component', () => {
  let component: Feature66Component21Component;
  let fixture: ComponentFixture<Feature66Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
