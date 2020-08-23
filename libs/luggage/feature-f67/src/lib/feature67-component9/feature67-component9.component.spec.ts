import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component9Component } from './feature67-component9.component';

describe('Feature67Component9Component', () => {
  let component: Feature67Component9Component;
  let fixture: ComponentFixture<Feature67Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
