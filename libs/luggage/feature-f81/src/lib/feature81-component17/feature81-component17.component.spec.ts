import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component17Component } from './feature81-component17.component';

describe('Feature81Component17Component', () => {
  let component: Feature81Component17Component;
  let fixture: ComponentFixture<Feature81Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
