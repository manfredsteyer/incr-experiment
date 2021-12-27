import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component24Component } from './feature67-component24.component';

describe('Feature67Component24Component', () => {
  let component: Feature67Component24Component;
  let fixture: ComponentFixture<Feature67Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
