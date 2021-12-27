import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component9Component } from './feature46-component9.component';

describe('Feature46Component9Component', () => {
  let component: Feature46Component9Component;
  let fixture: ComponentFixture<Feature46Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
