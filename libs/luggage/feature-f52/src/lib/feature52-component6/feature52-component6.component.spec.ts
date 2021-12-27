import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component6Component } from './feature52-component6.component';

describe('Feature52Component6Component', () => {
  let component: Feature52Component6Component;
  let fixture: ComponentFixture<Feature52Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
