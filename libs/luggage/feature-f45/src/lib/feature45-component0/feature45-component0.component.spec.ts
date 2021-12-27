import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component0Component } from './feature45-component0.component';

describe('Feature45Component0Component', () => {
  let component: Feature45Component0Component;
  let fixture: ComponentFixture<Feature45Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
