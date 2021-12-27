import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component1Component } from './feature45-component1.component';

describe('Feature45Component1Component', () => {
  let component: Feature45Component1Component;
  let fixture: ComponentFixture<Feature45Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
