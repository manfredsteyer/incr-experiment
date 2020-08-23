import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component2Component } from './feature21-component2.component';

describe('Feature21Component2Component', () => {
  let component: Feature21Component2Component;
  let fixture: ComponentFixture<Feature21Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
