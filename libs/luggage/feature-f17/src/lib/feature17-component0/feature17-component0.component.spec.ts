import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component0Component } from './feature17-component0.component';

describe('Feature17Component0Component', () => {
  let component: Feature17Component0Component;
  let fixture: ComponentFixture<Feature17Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
