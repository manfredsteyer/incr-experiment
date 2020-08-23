import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component9Component } from './feature16-component9.component';

describe('Feature16Component9Component', () => {
  let component: Feature16Component9Component;
  let fixture: ComponentFixture<Feature16Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
