import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component2Component } from './feature96-component2.component';

describe('Feature96Component2Component', () => {
  let component: Feature96Component2Component;
  let fixture: ComponentFixture<Feature96Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
