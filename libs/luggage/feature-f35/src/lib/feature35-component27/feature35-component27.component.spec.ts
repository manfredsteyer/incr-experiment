import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component27Component } from './feature35-component27.component';

describe('Feature35Component27Component', () => {
  let component: Feature35Component27Component;
  let fixture: ComponentFixture<Feature35Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
