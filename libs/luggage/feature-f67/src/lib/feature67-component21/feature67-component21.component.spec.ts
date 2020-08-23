import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component21Component } from './feature67-component21.component';

describe('Feature67Component21Component', () => {
  let component: Feature67Component21Component;
  let fixture: ComponentFixture<Feature67Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
