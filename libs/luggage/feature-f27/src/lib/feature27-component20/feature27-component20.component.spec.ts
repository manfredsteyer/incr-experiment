import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component20Component } from './feature27-component20.component';

describe('Feature27Component20Component', () => {
  let component: Feature27Component20Component;
  let fixture: ComponentFixture<Feature27Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
