import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component17Component } from './feature67-component17.component';

describe('Feature67Component17Component', () => {
  let component: Feature67Component17Component;
  let fixture: ComponentFixture<Feature67Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
