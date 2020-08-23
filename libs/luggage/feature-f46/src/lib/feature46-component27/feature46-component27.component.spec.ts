import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component27Component } from './feature46-component27.component';

describe('Feature46Component27Component', () => {
  let component: Feature46Component27Component;
  let fixture: ComponentFixture<Feature46Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
