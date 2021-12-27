import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component2Component } from './feature43-component2.component';

describe('Feature43Component2Component', () => {
  let component: Feature43Component2Component;
  let fixture: ComponentFixture<Feature43Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
