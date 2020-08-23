import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component2Component } from './feature67-component2.component';

describe('Feature67Component2Component', () => {
  let component: Feature67Component2Component;
  let fixture: ComponentFixture<Feature67Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
