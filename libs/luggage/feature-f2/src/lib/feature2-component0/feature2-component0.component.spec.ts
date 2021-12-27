import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component0Component } from './feature2-component0.component';

describe('Feature2Component0Component', () => {
  let component: Feature2Component0Component;
  let fixture: ComponentFixture<Feature2Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
