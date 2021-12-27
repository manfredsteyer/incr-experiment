import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component20Component } from './feature46-component20.component';

describe('Feature46Component20Component', () => {
  let component: Feature46Component20Component;
  let fixture: ComponentFixture<Feature46Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
