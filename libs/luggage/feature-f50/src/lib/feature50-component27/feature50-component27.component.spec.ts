import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component27Component } from './feature50-component27.component';

describe('Feature50Component27Component', () => {
  let component: Feature50Component27Component;
  let fixture: ComponentFixture<Feature50Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
