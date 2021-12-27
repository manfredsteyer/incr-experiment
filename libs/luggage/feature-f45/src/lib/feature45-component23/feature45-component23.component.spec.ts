import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component23Component } from './feature45-component23.component';

describe('Feature45Component23Component', () => {
  let component: Feature45Component23Component;
  let fixture: ComponentFixture<Feature45Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
