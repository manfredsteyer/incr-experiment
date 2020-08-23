import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component9Component } from './feature9-component9.component';

describe('Feature9Component9Component', () => {
  let component: Feature9Component9Component;
  let fixture: ComponentFixture<Feature9Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
