import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component12Component } from './feature74-component12.component';

describe('Feature74Component12Component', () => {
  let component: Feature74Component12Component;
  let fixture: ComponentFixture<Feature74Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
