import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component2Component } from './feature45-component2.component';

describe('Feature45Component2Component', () => {
  let component: Feature45Component2Component;
  let fixture: ComponentFixture<Feature45Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
