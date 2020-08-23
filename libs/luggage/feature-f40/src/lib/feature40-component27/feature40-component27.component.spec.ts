import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component27Component } from './feature40-component27.component';

describe('Feature40Component27Component', () => {
  let component: Feature40Component27Component;
  let fixture: ComponentFixture<Feature40Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
