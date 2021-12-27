import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component20Component } from './feature33-component20.component';

describe('Feature33Component20Component', () => {
  let component: Feature33Component20Component;
  let fixture: ComponentFixture<Feature33Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
