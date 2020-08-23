import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component27Component } from './feature94-component27.component';

describe('Feature94Component27Component', () => {
  let component: Feature94Component27Component;
  let fixture: ComponentFixture<Feature94Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
