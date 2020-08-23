import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component3Component } from './feature67-component3.component';

describe('Feature67Component3Component', () => {
  let component: Feature67Component3Component;
  let fixture: ComponentFixture<Feature67Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
