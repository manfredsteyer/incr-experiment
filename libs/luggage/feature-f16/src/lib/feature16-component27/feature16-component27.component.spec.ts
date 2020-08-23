import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component27Component } from './feature16-component27.component';

describe('Feature16Component27Component', () => {
  let component: Feature16Component27Component;
  let fixture: ComponentFixture<Feature16Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
