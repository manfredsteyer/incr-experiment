import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component17Component } from './feature41-component17.component';

describe('Feature41Component17Component', () => {
  let component: Feature41Component17Component;
  let fixture: ComponentFixture<Feature41Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
