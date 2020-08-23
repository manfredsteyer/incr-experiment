import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component9Component } from './feature73-component9.component';

describe('Feature73Component9Component', () => {
  let component: Feature73Component9Component;
  let fixture: ComponentFixture<Feature73Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
