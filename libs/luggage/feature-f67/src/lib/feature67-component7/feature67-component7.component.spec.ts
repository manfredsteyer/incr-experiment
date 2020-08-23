import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component7Component } from './feature67-component7.component';

describe('Feature67Component7Component', () => {
  let component: Feature67Component7Component;
  let fixture: ComponentFixture<Feature67Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
