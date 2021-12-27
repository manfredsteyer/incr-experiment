import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component20Component } from './feature36-component20.component';

describe('Feature36Component20Component', () => {
  let component: Feature36Component20Component;
  let fixture: ComponentFixture<Feature36Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
