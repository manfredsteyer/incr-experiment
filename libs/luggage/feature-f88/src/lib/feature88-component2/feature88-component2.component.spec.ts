import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component2Component } from './feature88-component2.component';

describe('Feature88Component2Component', () => {
  let component: Feature88Component2Component;
  let fixture: ComponentFixture<Feature88Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
