import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component27Component } from './feature86-component27.component';

describe('Feature86Component27Component', () => {
  let component: Feature86Component27Component;
  let fixture: ComponentFixture<Feature86Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
