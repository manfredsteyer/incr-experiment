import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component0Component } from './feature76-component0.component';

describe('Feature76Component0Component', () => {
  let component: Feature76Component0Component;
  let fixture: ComponentFixture<Feature76Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
