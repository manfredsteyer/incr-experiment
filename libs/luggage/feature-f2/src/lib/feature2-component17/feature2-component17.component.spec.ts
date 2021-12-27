import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component17Component } from './feature2-component17.component';

describe('Feature2Component17Component', () => {
  let component: Feature2Component17Component;
  let fixture: ComponentFixture<Feature2Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
