import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component20Component } from './feature67-component20.component';

describe('Feature67Component20Component', () => {
  let component: Feature67Component20Component;
  let fixture: ComponentFixture<Feature67Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
