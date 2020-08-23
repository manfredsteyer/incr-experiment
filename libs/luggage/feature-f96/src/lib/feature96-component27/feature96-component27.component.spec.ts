import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component27Component } from './feature96-component27.component';

describe('Feature96Component27Component', () => {
  let component: Feature96Component27Component;
  let fixture: ComponentFixture<Feature96Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
