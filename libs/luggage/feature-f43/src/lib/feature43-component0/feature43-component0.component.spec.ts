import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component0Component } from './feature43-component0.component';

describe('Feature43Component0Component', () => {
  let component: Feature43Component0Component;
  let fixture: ComponentFixture<Feature43Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
