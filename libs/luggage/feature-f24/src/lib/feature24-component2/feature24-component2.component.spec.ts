import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component2Component } from './feature24-component2.component';

describe('Feature24Component2Component', () => {
  let component: Feature24Component2Component;
  let fixture: ComponentFixture<Feature24Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
