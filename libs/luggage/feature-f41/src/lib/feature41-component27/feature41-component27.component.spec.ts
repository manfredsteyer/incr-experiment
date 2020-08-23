import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component27Component } from './feature41-component27.component';

describe('Feature41Component27Component', () => {
  let component: Feature41Component27Component;
  let fixture: ComponentFixture<Feature41Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
