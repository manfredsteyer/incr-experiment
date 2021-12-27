import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component27Component } from './feature48-component27.component';

describe('Feature48Component27Component', () => {
  let component: Feature48Component27Component;
  let fixture: ComponentFixture<Feature48Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
