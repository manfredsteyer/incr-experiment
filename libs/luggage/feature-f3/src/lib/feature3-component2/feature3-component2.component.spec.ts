import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component2Component } from './feature3-component2.component';

describe('Feature3Component2Component', () => {
  let component: Feature3Component2Component;
  let fixture: ComponentFixture<Feature3Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
