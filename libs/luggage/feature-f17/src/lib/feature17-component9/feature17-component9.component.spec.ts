import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component9Component } from './feature17-component9.component';

describe('Feature17Component9Component', () => {
  let component: Feature17Component9Component;
  let fixture: ComponentFixture<Feature17Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
