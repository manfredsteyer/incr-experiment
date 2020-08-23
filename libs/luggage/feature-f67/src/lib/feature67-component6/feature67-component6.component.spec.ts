import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component6Component } from './feature67-component6.component';

describe('Feature67Component6Component', () => {
  let component: Feature67Component6Component;
  let fixture: ComponentFixture<Feature67Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
