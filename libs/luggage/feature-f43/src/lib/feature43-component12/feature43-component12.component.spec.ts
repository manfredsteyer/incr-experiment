import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component12Component } from './feature43-component12.component';

describe('Feature43Component12Component', () => {
  let component: Feature43Component12Component;
  let fixture: ComponentFixture<Feature43Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
