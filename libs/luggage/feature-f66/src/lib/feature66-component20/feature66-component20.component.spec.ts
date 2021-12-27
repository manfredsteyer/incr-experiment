import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component20Component } from './feature66-component20.component';

describe('Feature66Component20Component', () => {
  let component: Feature66Component20Component;
  let fixture: ComponentFixture<Feature66Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
