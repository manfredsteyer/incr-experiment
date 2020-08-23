import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component27Component } from './feature90-component27.component';

describe('Feature90Component27Component', () => {
  let component: Feature90Component27Component;
  let fixture: ComponentFixture<Feature90Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
