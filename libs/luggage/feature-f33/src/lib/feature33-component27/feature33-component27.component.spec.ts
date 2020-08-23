import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component27Component } from './feature33-component27.component';

describe('Feature33Component27Component', () => {
  let component: Feature33Component27Component;
  let fixture: ComponentFixture<Feature33Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
