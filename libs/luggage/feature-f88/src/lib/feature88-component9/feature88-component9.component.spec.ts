import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component9Component } from './feature88-component9.component';

describe('Feature88Component9Component', () => {
  let component: Feature88Component9Component;
  let fixture: ComponentFixture<Feature88Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});