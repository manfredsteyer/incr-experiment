import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component2Component } from './feature46-component2.component';

describe('Feature46Component2Component', () => {
  let component: Feature46Component2Component;
  let fixture: ComponentFixture<Feature46Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
