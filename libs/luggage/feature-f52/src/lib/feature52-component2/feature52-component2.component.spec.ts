import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component2Component } from './feature52-component2.component';

describe('Feature52Component2Component', () => {
  let component: Feature52Component2Component;
  let fixture: ComponentFixture<Feature52Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});