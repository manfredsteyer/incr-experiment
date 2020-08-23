import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component2Component } from './feature16-component2.component';

describe('Feature16Component2Component', () => {
  let component: Feature16Component2Component;
  let fixture: ComponentFixture<Feature16Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
