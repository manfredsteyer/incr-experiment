import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component0Component } from './feature95-component0.component';

describe('Feature95Component0Component', () => {
  let component: Feature95Component0Component;
  let fixture: ComponentFixture<Feature95Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
