import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component2Component } from './feature84-component2.component';

describe('Feature84Component2Component', () => {
  let component: Feature84Component2Component;
  let fixture: ComponentFixture<Feature84Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
