import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component9Component } from './feature95-component9.component';

describe('Feature95Component9Component', () => {
  let component: Feature95Component9Component;
  let fixture: ComponentFixture<Feature95Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
