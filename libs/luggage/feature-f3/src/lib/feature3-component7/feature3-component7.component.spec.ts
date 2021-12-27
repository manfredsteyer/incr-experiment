import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component7Component } from './feature3-component7.component';

describe('Feature3Component7Component', () => {
  let component: Feature3Component7Component;
  let fixture: ComponentFixture<Feature3Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
