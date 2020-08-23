import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component2Component } from './feature25-component2.component';

describe('Feature25Component2Component', () => {
  let component: Feature25Component2Component;
  let fixture: ComponentFixture<Feature25Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
