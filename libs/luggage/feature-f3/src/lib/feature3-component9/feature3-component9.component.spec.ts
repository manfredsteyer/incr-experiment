import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component9Component } from './feature3-component9.component';

describe('Feature3Component9Component', () => {
  let component: Feature3Component9Component;
  let fixture: ComponentFixture<Feature3Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
