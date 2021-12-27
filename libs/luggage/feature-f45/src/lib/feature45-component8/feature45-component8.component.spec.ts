import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component8Component } from './feature45-component8.component';

describe('Feature45Component8Component', () => {
  let component: Feature45Component8Component;
  let fixture: ComponentFixture<Feature45Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
