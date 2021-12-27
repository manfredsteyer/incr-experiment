import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component9Component } from './feature57-component9.component';

describe('Feature57Component9Component', () => {
  let component: Feature57Component9Component;
  let fixture: ComponentFixture<Feature57Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
