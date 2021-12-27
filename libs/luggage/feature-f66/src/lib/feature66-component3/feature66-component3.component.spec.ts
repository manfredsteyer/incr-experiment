import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component3Component } from './feature66-component3.component';

describe('Feature66Component3Component', () => {
  let component: Feature66Component3Component;
  let fixture: ComponentFixture<Feature66Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
