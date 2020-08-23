import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component2Component } from './feature9-component2.component';

describe('Feature9Component2Component', () => {
  let component: Feature9Component2Component;
  let fixture: ComponentFixture<Feature9Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
