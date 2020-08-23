import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component27Component } from './feature56-component27.component';

describe('Feature56Component27Component', () => {
  let component: Feature56Component27Component;
  let fixture: ComponentFixture<Feature56Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
