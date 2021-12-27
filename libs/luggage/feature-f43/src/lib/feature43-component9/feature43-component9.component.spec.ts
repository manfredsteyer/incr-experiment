import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component9Component } from './feature43-component9.component';

describe('Feature43Component9Component', () => {
  let component: Feature43Component9Component;
  let fixture: ComponentFixture<Feature43Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
