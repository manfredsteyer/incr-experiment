import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component0Component } from './feature60-component0.component';

describe('Feature60Component0Component', () => {
  let component: Feature60Component0Component;
  let fixture: ComponentFixture<Feature60Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
