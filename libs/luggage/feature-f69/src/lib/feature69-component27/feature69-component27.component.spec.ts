import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component27Component } from './feature69-component27.component';

describe('Feature69Component27Component', () => {
  let component: Feature69Component27Component;
  let fixture: ComponentFixture<Feature69Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
