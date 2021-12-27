import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component12Component } from './feature39-component12.component';

describe('Feature39Component12Component', () => {
  let component: Feature39Component12Component;
  let fixture: ComponentFixture<Feature39Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
