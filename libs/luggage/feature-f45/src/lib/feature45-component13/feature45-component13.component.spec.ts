import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component13Component } from './feature45-component13.component';

describe('Feature45Component13Component', () => {
  let component: Feature45Component13Component;
  let fixture: ComponentFixture<Feature45Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
