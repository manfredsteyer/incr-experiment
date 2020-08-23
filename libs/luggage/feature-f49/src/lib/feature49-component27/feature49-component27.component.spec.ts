import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component27Component } from './feature49-component27.component';

describe('Feature49Component27Component', () => {
  let component: Feature49Component27Component;
  let fixture: ComponentFixture<Feature49Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
