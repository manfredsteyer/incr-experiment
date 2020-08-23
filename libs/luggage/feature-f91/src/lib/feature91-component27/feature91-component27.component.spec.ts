import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component27Component } from './feature91-component27.component';

describe('Feature91Component27Component', () => {
  let component: Feature91Component27Component;
  let fixture: ComponentFixture<Feature91Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
