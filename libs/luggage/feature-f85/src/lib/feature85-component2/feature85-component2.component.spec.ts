import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component2Component } from './feature85-component2.component';

describe('Feature85Component2Component', () => {
  let component: Feature85Component2Component;
  let fixture: ComponentFixture<Feature85Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
