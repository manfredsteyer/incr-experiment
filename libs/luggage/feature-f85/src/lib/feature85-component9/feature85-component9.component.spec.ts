import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component9Component } from './feature85-component9.component';

describe('Feature85Component9Component', () => {
  let component: Feature85Component9Component;
  let fixture: ComponentFixture<Feature85Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
