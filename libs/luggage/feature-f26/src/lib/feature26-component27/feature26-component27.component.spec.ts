import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component27Component } from './feature26-component27.component';

describe('Feature26Component27Component', () => {
  let component: Feature26Component27Component;
  let fixture: ComponentFixture<Feature26Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
