import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component18Component } from './feature45-component18.component';

describe('Feature45Component18Component', () => {
  let component: Feature45Component18Component;
  let fixture: ComponentFixture<Feature45Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
