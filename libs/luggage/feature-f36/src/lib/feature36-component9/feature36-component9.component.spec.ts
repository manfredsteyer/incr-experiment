import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component9Component } from './feature36-component9.component';

describe('Feature36Component9Component', () => {
  let component: Feature36Component9Component;
  let fixture: ComponentFixture<Feature36Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
