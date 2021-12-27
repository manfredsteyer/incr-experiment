import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component1Component } from './feature95-component1.component';

describe('Feature95Component1Component', () => {
  let component: Feature95Component1Component;
  let fixture: ComponentFixture<Feature95Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
