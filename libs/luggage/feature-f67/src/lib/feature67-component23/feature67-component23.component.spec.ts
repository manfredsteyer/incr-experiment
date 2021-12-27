import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component23Component } from './feature67-component23.component';

describe('Feature67Component23Component', () => {
  let component: Feature67Component23Component;
  let fixture: ComponentFixture<Feature67Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
