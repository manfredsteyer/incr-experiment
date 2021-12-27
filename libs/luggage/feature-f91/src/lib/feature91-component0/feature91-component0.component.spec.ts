import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component0Component } from './feature91-component0.component';

describe('Feature91Component0Component', () => {
  let component: Feature91Component0Component;
  let fixture: ComponentFixture<Feature91Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
