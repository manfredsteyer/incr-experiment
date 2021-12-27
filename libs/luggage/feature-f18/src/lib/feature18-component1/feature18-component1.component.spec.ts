import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component1Component } from './feature18-component1.component';

describe('Feature18Component1Component', () => {
  let component: Feature18Component1Component;
  let fixture: ComponentFixture<Feature18Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
