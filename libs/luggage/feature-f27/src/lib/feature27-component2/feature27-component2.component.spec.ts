import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component2Component } from './feature27-component2.component';

describe('Feature27Component2Component', () => {
  let component: Feature27Component2Component;
  let fixture: ComponentFixture<Feature27Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
