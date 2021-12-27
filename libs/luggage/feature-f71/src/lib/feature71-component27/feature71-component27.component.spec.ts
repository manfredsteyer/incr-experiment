import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component27Component } from './feature71-component27.component';

describe('Feature71Component27Component', () => {
  let component: Feature71Component27Component;
  let fixture: ComponentFixture<Feature71Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
