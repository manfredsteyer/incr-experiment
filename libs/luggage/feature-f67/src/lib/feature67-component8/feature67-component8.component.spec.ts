import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component8Component } from './feature67-component8.component';

describe('Feature67Component8Component', () => {
  let component: Feature67Component8Component;
  let fixture: ComponentFixture<Feature67Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
