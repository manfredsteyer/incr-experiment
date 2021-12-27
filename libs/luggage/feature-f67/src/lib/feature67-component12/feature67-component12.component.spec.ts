import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component12Component } from './feature67-component12.component';

describe('Feature67Component12Component', () => {
  let component: Feature67Component12Component;
  let fixture: ComponentFixture<Feature67Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
