import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component27Component } from './feature4-component27.component';

describe('Feature4Component27Component', () => {
  let component: Feature4Component27Component;
  let fixture: ComponentFixture<Feature4Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
