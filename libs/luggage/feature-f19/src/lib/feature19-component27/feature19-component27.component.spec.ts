import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component27Component } from './feature19-component27.component';

describe('Feature19Component27Component', () => {
  let component: Feature19Component27Component;
  let fixture: ComponentFixture<Feature19Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
