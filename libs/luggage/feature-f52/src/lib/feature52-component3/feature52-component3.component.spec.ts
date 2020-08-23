import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component3Component } from './feature52-component3.component';

describe('Feature52Component3Component', () => {
  let component: Feature52Component3Component;
  let fixture: ComponentFixture<Feature52Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
