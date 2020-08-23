import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component27Component } from './feature15-component27.component';

describe('Feature15Component27Component', () => {
  let component: Feature15Component27Component;
  let fixture: ComponentFixture<Feature15Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
