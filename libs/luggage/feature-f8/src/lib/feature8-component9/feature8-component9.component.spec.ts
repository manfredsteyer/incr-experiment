import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component9Component } from './feature8-component9.component';

describe('Feature8Component9Component', () => {
  let component: Feature8Component9Component;
  let fixture: ComponentFixture<Feature8Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
