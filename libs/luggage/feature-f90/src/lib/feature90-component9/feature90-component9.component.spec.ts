import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component9Component } from './feature90-component9.component';

describe('Feature90Component9Component', () => {
  let component: Feature90Component9Component;
  let fixture: ComponentFixture<Feature90Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
