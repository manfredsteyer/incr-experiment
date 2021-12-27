import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component9Component } from './feature48-component9.component';

describe('Feature48Component9Component', () => {
  let component: Feature48Component9Component;
  let fixture: ComponentFixture<Feature48Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
