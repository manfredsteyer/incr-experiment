import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component2Component } from './feature95-component2.component';

describe('Feature95Component2Component', () => {
  let component: Feature95Component2Component;
  let fixture: ComponentFixture<Feature95Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
