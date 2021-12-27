import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component20Component } from './feature9-component20.component';

describe('Feature9Component20Component', () => {
  let component: Feature9Component20Component;
  let fixture: ComponentFixture<Feature9Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
