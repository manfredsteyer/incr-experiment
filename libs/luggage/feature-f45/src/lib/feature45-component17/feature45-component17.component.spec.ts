import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component17Component } from './feature45-component17.component';

describe('Feature45Component17Component', () => {
  let component: Feature45Component17Component;
  let fixture: ComponentFixture<Feature45Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
