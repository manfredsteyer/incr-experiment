import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component0Component } from './feature50-component0.component';

describe('Feature50Component0Component', () => {
  let component: Feature50Component0Component;
  let fixture: ComponentFixture<Feature50Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
