import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component11Component } from './feature52-component11.component';

describe('Feature52Component11Component', () => {
  let component: Feature52Component11Component;
  let fixture: ComponentFixture<Feature52Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
