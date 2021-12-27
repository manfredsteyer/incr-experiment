import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component2Component } from './feature90-component2.component';

describe('Feature90Component2Component', () => {
  let component: Feature90Component2Component;
  let fixture: ComponentFixture<Feature90Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
