import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component2Component } from './feature14-component2.component';

describe('Feature14Component2Component', () => {
  let component: Feature14Component2Component;
  let fixture: ComponentFixture<Feature14Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
