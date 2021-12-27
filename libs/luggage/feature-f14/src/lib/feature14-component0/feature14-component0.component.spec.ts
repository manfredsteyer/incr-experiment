import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component0Component } from './feature14-component0.component';

describe('Feature14Component0Component', () => {
  let component: Feature14Component0Component;
  let fixture: ComponentFixture<Feature14Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
