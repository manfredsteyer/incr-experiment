import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component29Component } from './feature67-component29.component';

describe('Feature67Component29Component', () => {
  let component: Feature67Component29Component;
  let fixture: ComponentFixture<Feature67Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
