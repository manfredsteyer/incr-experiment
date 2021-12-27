import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component17Component } from './feature50-component17.component';

describe('Feature50Component17Component', () => {
  let component: Feature50Component17Component;
  let fixture: ComponentFixture<Feature50Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
