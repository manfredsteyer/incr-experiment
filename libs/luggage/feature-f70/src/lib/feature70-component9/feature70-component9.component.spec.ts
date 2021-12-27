import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component9Component } from './feature70-component9.component';

describe('Feature70Component9Component', () => {
  let component: Feature70Component9Component;
  let fixture: ComponentFixture<Feature70Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
