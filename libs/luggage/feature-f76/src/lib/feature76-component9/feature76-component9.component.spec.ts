import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component9Component } from './feature76-component9.component';

describe('Feature76Component9Component', () => {
  let component: Feature76Component9Component;
  let fixture: ComponentFixture<Feature76Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
