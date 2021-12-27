import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component27Component } from './feature6-component27.component';

describe('Feature6Component27Component', () => {
  let component: Feature6Component27Component;
  let fixture: ComponentFixture<Feature6Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
