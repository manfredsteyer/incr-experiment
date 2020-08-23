import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component2Component } from './feature18-component2.component';

describe('Feature18Component2Component', () => {
  let component: Feature18Component2Component;
  let fixture: ComponentFixture<Feature18Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
