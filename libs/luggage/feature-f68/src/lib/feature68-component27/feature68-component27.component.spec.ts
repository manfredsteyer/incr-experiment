import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component27Component } from './feature68-component27.component';

describe('Feature68Component27Component', () => {
  let component: Feature68Component27Component;
  let fixture: ComponentFixture<Feature68Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
