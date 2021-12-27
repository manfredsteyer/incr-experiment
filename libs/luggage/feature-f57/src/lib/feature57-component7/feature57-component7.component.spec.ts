import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component7Component } from './feature57-component7.component';

describe('Feature57Component7Component', () => {
  let component: Feature57Component7Component;
  let fixture: ComponentFixture<Feature57Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
