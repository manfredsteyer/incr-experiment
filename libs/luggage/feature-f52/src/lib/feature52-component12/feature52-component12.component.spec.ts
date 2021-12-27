import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component12Component } from './feature52-component12.component';

describe('Feature52Component12Component', () => {
  let component: Feature52Component12Component;
  let fixture: ComponentFixture<Feature52Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
