import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component7Component } from './feature85-component7.component';

describe('Feature85Component7Component', () => {
  let component: Feature85Component7Component;
  let fixture: ComponentFixture<Feature85Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
