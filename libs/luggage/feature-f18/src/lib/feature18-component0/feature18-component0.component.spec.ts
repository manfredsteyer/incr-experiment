import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component0Component } from './feature18-component0.component';

describe('Feature18Component0Component', () => {
  let component: Feature18Component0Component;
  let fixture: ComponentFixture<Feature18Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
