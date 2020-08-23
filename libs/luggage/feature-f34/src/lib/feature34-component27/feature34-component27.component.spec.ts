import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component27Component } from './feature34-component27.component';

describe('Feature34Component27Component', () => {
  let component: Feature34Component27Component;
  let fixture: ComponentFixture<Feature34Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
