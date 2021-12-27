import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component13Component } from './feature52-component13.component';

describe('Feature52Component13Component', () => {
  let component: Feature52Component13Component;
  let fixture: ComponentFixture<Feature52Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
