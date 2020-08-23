import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component2Component } from './feature1-component2.component';

describe('Feature1Component2Component', () => {
  let component: Feature1Component2Component;
  let fixture: ComponentFixture<Feature1Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
