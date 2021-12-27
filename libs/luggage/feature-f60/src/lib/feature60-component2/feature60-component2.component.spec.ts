import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component2Component } from './feature60-component2.component';

describe('Feature60Component2Component', () => {
  let component: Feature60Component2Component;
  let fixture: ComponentFixture<Feature60Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
