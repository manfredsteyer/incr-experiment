import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component0Component } from './feature57-component0.component';

describe('Feature57Component0Component', () => {
  let component: Feature57Component0Component;
  let fixture: ComponentFixture<Feature57Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
