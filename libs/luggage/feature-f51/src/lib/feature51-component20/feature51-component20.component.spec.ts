import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component20Component } from './feature51-component20.component';

describe('Feature51Component20Component', () => {
  let component: Feature51Component20Component;
  let fixture: ComponentFixture<Feature51Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
