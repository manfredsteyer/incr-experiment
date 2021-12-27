import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component9Component } from './feature31-component9.component';

describe('Feature31Component9Component', () => {
  let component: Feature31Component9Component;
  let fixture: ComponentFixture<Feature31Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
