import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component0Component } from './feature44-component0.component';

describe('Feature44Component0Component', () => {
  let component: Feature44Component0Component;
  let fixture: ComponentFixture<Feature44Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
