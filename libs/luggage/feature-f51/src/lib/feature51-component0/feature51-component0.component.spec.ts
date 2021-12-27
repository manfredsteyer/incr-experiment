import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component0Component } from './feature51-component0.component';

describe('Feature51Component0Component', () => {
  let component: Feature51Component0Component;
  let fixture: ComponentFixture<Feature51Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
