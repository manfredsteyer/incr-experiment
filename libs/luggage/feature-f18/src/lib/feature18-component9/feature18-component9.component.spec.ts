import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component9Component } from './feature18-component9.component';

describe('Feature18Component9Component', () => {
  let component: Feature18Component9Component;
  let fixture: ComponentFixture<Feature18Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
