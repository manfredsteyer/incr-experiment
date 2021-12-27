import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component2Component } from './feature93-component2.component';

describe('Feature93Component2Component', () => {
  let component: Feature93Component2Component;
  let fixture: ComponentFixture<Feature93Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
