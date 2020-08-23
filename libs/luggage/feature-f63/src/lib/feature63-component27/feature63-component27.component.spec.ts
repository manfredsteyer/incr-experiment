import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component27Component } from './feature63-component27.component';

describe('Feature63Component27Component', () => {
  let component: Feature63Component27Component;
  let fixture: ComponentFixture<Feature63Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature63Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
