import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component8Component } from './feature52-component8.component';

describe('Feature52Component8Component', () => {
  let component: Feature52Component8Component;
  let fixture: ComponentFixture<Feature52Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
