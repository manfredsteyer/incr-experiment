import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component0Component } from './feature52-component0.component';

describe('Feature52Component0Component', () => {
  let component: Feature52Component0Component;
  let fixture: ComponentFixture<Feature52Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
