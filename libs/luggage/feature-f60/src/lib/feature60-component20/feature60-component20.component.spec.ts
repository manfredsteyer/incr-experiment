import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component20Component } from './feature60-component20.component';

describe('Feature60Component20Component', () => {
  let component: Feature60Component20Component;
  let fixture: ComponentFixture<Feature60Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
