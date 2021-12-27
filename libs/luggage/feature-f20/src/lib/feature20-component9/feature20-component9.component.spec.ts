import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component9Component } from './feature20-component9.component';

describe('Feature20Component9Component', () => {
  let component: Feature20Component9Component;
  let fixture: ComponentFixture<Feature20Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
