import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component1Component } from './feature52-component1.component';

describe('Feature52Component1Component', () => {
  let component: Feature52Component1Component;
  let fixture: ComponentFixture<Feature52Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
