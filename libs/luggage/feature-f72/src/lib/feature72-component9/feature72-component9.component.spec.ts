import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component9Component } from './feature72-component9.component';

describe('Feature72Component9Component', () => {
  let component: Feature72Component9Component;
  let fixture: ComponentFixture<Feature72Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
