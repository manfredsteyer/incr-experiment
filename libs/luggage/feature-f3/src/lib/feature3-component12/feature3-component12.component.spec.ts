import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component12Component } from './feature3-component12.component';

describe('Feature3Component12Component', () => {
  let component: Feature3Component12Component;
  let fixture: ComponentFixture<Feature3Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
