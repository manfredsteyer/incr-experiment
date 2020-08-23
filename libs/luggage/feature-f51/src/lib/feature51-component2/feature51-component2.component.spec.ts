import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component2Component } from './feature51-component2.component';

describe('Feature51Component2Component', () => {
  let component: Feature51Component2Component;
  let fixture: ComponentFixture<Feature51Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
