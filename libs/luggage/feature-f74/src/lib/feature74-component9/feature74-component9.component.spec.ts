import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component9Component } from './feature74-component9.component';

describe('Feature74Component9Component', () => {
  let component: Feature74Component9Component;
  let fixture: ComponentFixture<Feature74Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
