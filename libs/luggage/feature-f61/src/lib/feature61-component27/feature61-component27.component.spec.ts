import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component27Component } from './feature61-component27.component';

describe('Feature61Component27Component', () => {
  let component: Feature61Component27Component;
  let fixture: ComponentFixture<Feature61Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
