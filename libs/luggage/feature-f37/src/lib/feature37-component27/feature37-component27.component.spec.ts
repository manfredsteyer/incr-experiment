import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component27Component } from './feature37-component27.component';

describe('Feature37Component27Component', () => {
  let component: Feature37Component27Component;
  let fixture: ComponentFixture<Feature37Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
