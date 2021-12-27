import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component12Component } from './feature57-component12.component';

describe('Feature57Component12Component', () => {
  let component: Feature57Component12Component;
  let fixture: ComponentFixture<Feature57Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
