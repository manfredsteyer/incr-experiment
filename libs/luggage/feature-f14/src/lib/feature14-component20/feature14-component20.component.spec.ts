import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component20Component } from './feature14-component20.component';

describe('Feature14Component20Component', () => {
  let component: Feature14Component20Component;
  let fixture: ComponentFixture<Feature14Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
