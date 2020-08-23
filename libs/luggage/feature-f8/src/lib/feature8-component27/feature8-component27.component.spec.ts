import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component27Component } from './feature8-component27.component';

describe('Feature8Component27Component', () => {
  let component: Feature8Component27Component;
  let fixture: ComponentFixture<Feature8Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
