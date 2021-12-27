import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component1Component } from './feature14-component1.component';

describe('Feature14Component1Component', () => {
  let component: Feature14Component1Component;
  let fixture: ComponentFixture<Feature14Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
