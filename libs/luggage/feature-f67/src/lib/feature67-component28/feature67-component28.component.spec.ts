import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component28Component } from './feature67-component28.component';

describe('Feature67Component28Component', () => {
  let component: Feature67Component28Component;
  let fixture: ComponentFixture<Feature67Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
