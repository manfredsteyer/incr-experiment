import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component13Component } from './feature9-component13.component';

describe('Feature9Component13Component', () => {
  let component: Feature9Component13Component;
  let fixture: ComponentFixture<Feature9Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
