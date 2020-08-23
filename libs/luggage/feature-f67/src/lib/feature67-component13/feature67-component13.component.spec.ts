import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component13Component } from './feature67-component13.component';

describe('Feature67Component13Component', () => {
  let component: Feature67Component13Component;
  let fixture: ComponentFixture<Feature67Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
