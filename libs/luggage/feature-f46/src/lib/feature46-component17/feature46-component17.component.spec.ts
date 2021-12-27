import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component17Component } from './feature46-component17.component';

describe('Feature46Component17Component', () => {
  let component: Feature46Component17Component;
  let fixture: ComponentFixture<Feature46Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
