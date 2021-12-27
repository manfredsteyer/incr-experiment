import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component9Component } from './feature51-component9.component';

describe('Feature51Component9Component', () => {
  let component: Feature51Component9Component;
  let fixture: ComponentFixture<Feature51Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
