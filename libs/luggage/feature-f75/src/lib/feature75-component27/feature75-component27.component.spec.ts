import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component27Component } from './feature75-component27.component';

describe('Feature75Component27Component', () => {
  let component: Feature75Component27Component;
  let fixture: ComponentFixture<Feature75Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
