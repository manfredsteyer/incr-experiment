import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component20Component } from './feature57-component20.component';

describe('Feature57Component20Component', () => {
  let component: Feature57Component20Component;
  let fixture: ComponentFixture<Feature57Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
