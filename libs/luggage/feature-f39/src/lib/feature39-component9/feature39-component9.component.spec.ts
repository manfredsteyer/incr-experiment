import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component9Component } from './feature39-component9.component';

describe('Feature39Component9Component', () => {
  let component: Feature39Component9Component;
  let fixture: ComponentFixture<Feature39Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
