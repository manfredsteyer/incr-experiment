import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component0Component } from './feature84-component0.component';

describe('Feature84Component0Component', () => {
  let component: Feature84Component0Component;
  let fixture: ComponentFixture<Feature84Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
