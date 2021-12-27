import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component12Component } from './feature85-component12.component';

describe('Feature85Component12Component', () => {
  let component: Feature85Component12Component;
  let fixture: ComponentFixture<Feature85Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
