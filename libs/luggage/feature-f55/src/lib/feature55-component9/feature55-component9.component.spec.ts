import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component9Component } from './feature55-component9.component';

describe('Feature55Component9Component', () => {
  let component: Feature55Component9Component;
  let fixture: ComponentFixture<Feature55Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
