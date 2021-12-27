import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component20Component } from './feature85-component20.component';

describe('Feature85Component20Component', () => {
  let component: Feature85Component20Component;
  let fixture: ComponentFixture<Feature85Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
