import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component9Component } from './feature41-component9.component';

describe('Feature41Component9Component', () => {
  let component: Feature41Component9Component;
  let fixture: ComponentFixture<Feature41Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
