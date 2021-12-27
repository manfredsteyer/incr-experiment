import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component17Component } from './feature76-component17.component';

describe('Feature76Component17Component', () => {
  let component: Feature76Component17Component;
  let fixture: ComponentFixture<Feature76Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
