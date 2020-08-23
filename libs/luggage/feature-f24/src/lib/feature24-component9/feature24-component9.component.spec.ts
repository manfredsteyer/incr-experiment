import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component9Component } from './feature24-component9.component';

describe('Feature24Component9Component', () => {
  let component: Feature24Component9Component;
  let fixture: ComponentFixture<Feature24Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
