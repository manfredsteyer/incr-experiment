import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component18Component } from './feature14-component18.component';

describe('Feature14Component18Component', () => {
  let component: Feature14Component18Component;
  let fixture: ComponentFixture<Feature14Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
