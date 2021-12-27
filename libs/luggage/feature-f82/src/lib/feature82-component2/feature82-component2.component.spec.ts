import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component2Component } from './feature82-component2.component';

describe('Feature82Component2Component', () => {
  let component: Feature82Component2Component;
  let fixture: ComponentFixture<Feature82Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
