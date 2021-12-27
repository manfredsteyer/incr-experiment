import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component2Component } from './feature91-component2.component';

describe('Feature91Component2Component', () => {
  let component: Feature91Component2Component;
  let fixture: ComponentFixture<Feature91Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
