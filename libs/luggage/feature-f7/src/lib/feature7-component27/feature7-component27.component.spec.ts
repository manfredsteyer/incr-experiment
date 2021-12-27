import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component27Component } from './feature7-component27.component';

describe('Feature7Component27Component', () => {
  let component: Feature7Component27Component;
  let fixture: ComponentFixture<Feature7Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
