import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component12Component } from './feature1-component12.component';

describe('Feature1Component12Component', () => {
  let component: Feature1Component12Component;
  let fixture: ComponentFixture<Feature1Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
