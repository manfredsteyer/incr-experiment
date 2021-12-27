import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component2Component } from './feature55-component2.component';

describe('Feature55Component2Component', () => {
  let component: Feature55Component2Component;
  let fixture: ComponentFixture<Feature55Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
