import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component27Component } from './feature53-component27.component';

describe('Feature53Component27Component', () => {
  let component: Feature53Component27Component;
  let fixture: ComponentFixture<Feature53Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
