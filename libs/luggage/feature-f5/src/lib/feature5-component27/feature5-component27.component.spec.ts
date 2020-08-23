import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component27Component } from './feature5-component27.component';

describe('Feature5Component27Component', () => {
  let component: Feature5Component27Component;
  let fixture: ComponentFixture<Feature5Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
