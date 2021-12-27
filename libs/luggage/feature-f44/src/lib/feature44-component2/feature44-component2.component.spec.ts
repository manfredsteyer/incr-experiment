import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component2Component } from './feature44-component2.component';

describe('Feature44Component2Component', () => {
  let component: Feature44Component2Component;
  let fixture: ComponentFixture<Feature44Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
