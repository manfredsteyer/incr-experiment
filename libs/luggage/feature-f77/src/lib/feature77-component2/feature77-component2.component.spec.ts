import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component2Component } from './feature77-component2.component';

describe('Feature77Component2Component', () => {
  let component: Feature77Component2Component;
  let fixture: ComponentFixture<Feature77Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
