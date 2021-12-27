import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component21Component } from './feature52-component21.component';

describe('Feature52Component21Component', () => {
  let component: Feature52Component21Component;
  let fixture: ComponentFixture<Feature52Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
