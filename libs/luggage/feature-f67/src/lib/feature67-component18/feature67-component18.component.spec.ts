import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component18Component } from './feature67-component18.component';

describe('Feature67Component18Component', () => {
  let component: Feature67Component18Component;
  let fixture: ComponentFixture<Feature67Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
