import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component14Component } from './feature67-component14.component';

describe('Feature67Component14Component', () => {
  let component: Feature67Component14Component;
  let fixture: ComponentFixture<Feature67Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
