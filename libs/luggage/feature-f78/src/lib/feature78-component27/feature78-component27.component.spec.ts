import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component27Component } from './feature78-component27.component';

describe('Feature78Component27Component', () => {
  let component: Feature78Component27Component;
  let fixture: ComponentFixture<Feature78Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
