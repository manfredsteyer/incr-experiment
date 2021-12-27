import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component20Component } from './feature93-component20.component';

describe('Feature93Component20Component', () => {
  let component: Feature93Component20Component;
  let fixture: ComponentFixture<Feature93Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
