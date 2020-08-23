import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component27Component } from './feature92-component27.component';

describe('Feature92Component27Component', () => {
  let component: Feature92Component27Component;
  let fixture: ComponentFixture<Feature92Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
