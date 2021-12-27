import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component27Component } from './feature31-component27.component';

describe('Feature31Component27Component', () => {
  let component: Feature31Component27Component;
  let fixture: ComponentFixture<Feature31Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
