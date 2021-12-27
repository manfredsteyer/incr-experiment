import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component2Component } from './feature17-component2.component';

describe('Feature17Component2Component', () => {
  let component: Feature17Component2Component;
  let fixture: ComponentFixture<Feature17Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
