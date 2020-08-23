import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component2Component } from './feature36-component2.component';

describe('Feature36Component2Component', () => {
  let component: Feature36Component2Component;
  let fixture: ComponentFixture<Feature36Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
