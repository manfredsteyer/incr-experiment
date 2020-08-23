import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component9Component } from './feature96-component9.component';

describe('Feature96Component9Component', () => {
  let component: Feature96Component9Component;
  let fixture: ComponentFixture<Feature96Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
