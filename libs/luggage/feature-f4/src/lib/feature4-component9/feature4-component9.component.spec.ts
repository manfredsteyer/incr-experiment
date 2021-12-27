import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component9Component } from './feature4-component9.component';

describe('Feature4Component9Component', () => {
  let component: Feature4Component9Component;
  let fixture: ComponentFixture<Feature4Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
