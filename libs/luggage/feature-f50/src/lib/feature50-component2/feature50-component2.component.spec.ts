import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component2Component } from './feature50-component2.component';

describe('Feature50Component2Component', () => {
  let component: Feature50Component2Component;
  let fixture: ComponentFixture<Feature50Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
