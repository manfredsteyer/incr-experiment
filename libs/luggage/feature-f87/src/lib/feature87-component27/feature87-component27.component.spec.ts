import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component27Component } from './feature87-component27.component';

describe('Feature87Component27Component', () => {
  let component: Feature87Component27Component;
  let fixture: ComponentFixture<Feature87Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
