import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component27Component } from './feature98-component27.component';

describe('Feature98Component27Component', () => {
  let component: Feature98Component27Component;
  let fixture: ComponentFixture<Feature98Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
