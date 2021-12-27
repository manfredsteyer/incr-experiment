import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component12Component } from './feature95-component12.component';

describe('Feature95Component12Component', () => {
  let component: Feature95Component12Component;
  let fixture: ComponentFixture<Feature95Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
