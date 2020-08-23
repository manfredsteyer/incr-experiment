import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component24Component } from './feature52-component24.component';

describe('Feature52Component24Component', () => {
  let component: Feature52Component24Component;
  let fixture: ComponentFixture<Feature52Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
