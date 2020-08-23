import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component18Component } from './feature52-component18.component';

describe('Feature52Component18Component', () => {
  let component: Feature52Component18Component;
  let fixture: ComponentFixture<Feature52Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
