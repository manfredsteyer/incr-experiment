import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component27Component } from './feature70-component27.component';

describe('Feature70Component27Component', () => {
  let component: Feature70Component27Component;
  let fixture: ComponentFixture<Feature70Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
