import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component17Component } from './feature73-component17.component';

describe('Feature73Component17Component', () => {
  let component: Feature73Component17Component;
  let fixture: ComponentFixture<Feature73Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
