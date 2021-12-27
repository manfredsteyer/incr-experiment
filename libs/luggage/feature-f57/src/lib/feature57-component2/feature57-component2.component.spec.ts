import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component2Component } from './feature57-component2.component';

describe('Feature57Component2Component', () => {
  let component: Feature57Component2Component;
  let fixture: ComponentFixture<Feature57Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
