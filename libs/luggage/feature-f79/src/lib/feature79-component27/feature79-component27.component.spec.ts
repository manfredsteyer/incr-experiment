import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component27Component } from './feature79-component27.component';

describe('Feature79Component27Component', () => {
  let component: Feature79Component27Component;
  let fixture: ComponentFixture<Feature79Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
