import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component9Component } from './feature60-component9.component';

describe('Feature60Component9Component', () => {
  let component: Feature60Component9Component;
  let fixture: ComponentFixture<Feature60Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
