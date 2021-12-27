import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component20Component } from './feature45-component20.component';

describe('Feature45Component20Component', () => {
  let component: Feature45Component20Component;
  let fixture: ComponentFixture<Feature45Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
