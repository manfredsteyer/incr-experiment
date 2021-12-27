import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component27Component } from './feature29-component27.component';

describe('Feature29Component27Component', () => {
  let component: Feature29Component27Component;
  let fixture: ComponentFixture<Feature29Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
