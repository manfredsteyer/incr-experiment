import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component27Component } from './feature66-component27.component';

describe('Feature66Component27Component', () => {
  let component: Feature66Component27Component;
  let fixture: ComponentFixture<Feature66Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
