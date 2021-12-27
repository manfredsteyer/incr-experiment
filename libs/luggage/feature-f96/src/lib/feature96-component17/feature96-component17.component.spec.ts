import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component17Component } from './feature96-component17.component';

describe('Feature96Component17Component', () => {
  let component: Feature96Component17Component;
  let fixture: ComponentFixture<Feature96Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
