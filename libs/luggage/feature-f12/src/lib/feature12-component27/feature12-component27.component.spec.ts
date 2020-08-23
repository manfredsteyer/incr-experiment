import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component27Component } from './feature12-component27.component';

describe('Feature12Component27Component', () => {
  let component: Feature12Component27Component;
  let fixture: ComponentFixture<Feature12Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
