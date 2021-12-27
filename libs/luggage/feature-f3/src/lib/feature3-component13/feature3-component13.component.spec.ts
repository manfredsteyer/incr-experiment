import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component13Component } from './feature3-component13.component';

describe('Feature3Component13Component', () => {
  let component: Feature3Component13Component;
  let fixture: ComponentFixture<Feature3Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
