import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component14Component } from './feature52-component14.component';

describe('Feature52Component14Component', () => {
  let component: Feature52Component14Component;
  let fixture: ComponentFixture<Feature52Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
