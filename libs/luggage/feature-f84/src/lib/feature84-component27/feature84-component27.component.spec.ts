import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component27Component } from './feature84-component27.component';

describe('Feature84Component27Component', () => {
  let component: Feature84Component27Component;
  let fixture: ComponentFixture<Feature84Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
