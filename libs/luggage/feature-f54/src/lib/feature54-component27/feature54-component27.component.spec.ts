import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component27Component } from './feature54-component27.component';

describe('Feature54Component27Component', () => {
  let component: Feature54Component27Component;
  let fixture: ComponentFixture<Feature54Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
