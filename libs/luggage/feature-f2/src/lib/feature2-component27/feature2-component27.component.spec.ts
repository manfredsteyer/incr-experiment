import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component27Component } from './feature2-component27.component';

describe('Feature2Component27Component', () => {
  let component: Feature2Component27Component;
  let fixture: ComponentFixture<Feature2Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
