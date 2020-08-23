import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component9Component } from './feature1-component9.component';

describe('Feature1Component9Component', () => {
  let component: Feature1Component9Component;
  let fixture: ComponentFixture<Feature1Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
