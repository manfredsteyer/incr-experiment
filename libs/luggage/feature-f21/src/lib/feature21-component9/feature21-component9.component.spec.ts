import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component9Component } from './feature21-component9.component';

describe('Feature21Component9Component', () => {
  let component: Feature21Component9Component;
  let fixture: ComponentFixture<Feature21Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
