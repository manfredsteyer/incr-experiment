import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component2Component } from './feature73-component2.component';

describe('Feature73Component2Component', () => {
  let component: Feature73Component2Component;
  let fixture: ComponentFixture<Feature73Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
