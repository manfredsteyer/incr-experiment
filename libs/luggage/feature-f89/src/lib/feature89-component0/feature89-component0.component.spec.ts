import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component0Component } from './feature89-component0.component';

describe('Feature89Component0Component', () => {
  let component: Feature89Component0Component;
  let fixture: ComponentFixture<Feature89Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
