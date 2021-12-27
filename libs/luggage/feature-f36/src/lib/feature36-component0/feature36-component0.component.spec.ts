import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component0Component } from './feature36-component0.component';

describe('Feature36Component0Component', () => {
  let component: Feature36Component0Component;
  let fixture: ComponentFixture<Feature36Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
