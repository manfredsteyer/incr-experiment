import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component2Component } from './feature74-component2.component';

describe('Feature74Component2Component', () => {
  let component: Feature74Component2Component;
  let fixture: ComponentFixture<Feature74Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
