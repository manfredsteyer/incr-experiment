import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component23Component } from './feature52-component23.component';

describe('Feature52Component23Component', () => {
  let component: Feature52Component23Component;
  let fixture: ComponentFixture<Feature52Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
