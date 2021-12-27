import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component7Component } from './feature52-component7.component';

describe('Feature52Component7Component', () => {
  let component: Feature52Component7Component;
  let fixture: ComponentFixture<Feature52Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
