import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component1Component } from './feature67-component1.component';

describe('Feature67Component1Component', () => {
  let component: Feature67Component1Component;
  let fixture: ComponentFixture<Feature67Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
