import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component20Component } from './feature18-component20.component';

describe('Feature18Component20Component', () => {
  let component: Feature18Component20Component;
  let fixture: ComponentFixture<Feature18Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
