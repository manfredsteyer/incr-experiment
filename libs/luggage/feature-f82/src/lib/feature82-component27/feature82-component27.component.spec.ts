import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component27Component } from './feature82-component27.component';

describe('Feature82Component27Component', () => {
  let component: Feature82Component27Component;
  let fixture: ComponentFixture<Feature82Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
