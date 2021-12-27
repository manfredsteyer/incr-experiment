import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component2Component } from './feature76-component2.component';

describe('Feature76Component2Component', () => {
  let component: Feature76Component2Component;
  let fixture: ComponentFixture<Feature76Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
