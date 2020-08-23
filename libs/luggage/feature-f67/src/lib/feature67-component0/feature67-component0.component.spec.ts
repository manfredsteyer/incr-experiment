import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component0Component } from './feature67-component0.component';

describe('Feature67Component0Component', () => {
  let component: Feature67Component0Component;
  let fixture: ComponentFixture<Feature67Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
