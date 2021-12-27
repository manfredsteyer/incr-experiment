import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component20Component } from './feature52-component20.component';

describe('Feature52Component20Component', () => {
  let component: Feature52Component20Component;
  let fixture: ComponentFixture<Feature52Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
