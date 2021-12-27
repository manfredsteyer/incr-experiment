import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component17Component } from './feature60-component17.component';

describe('Feature60Component17Component', () => {
  let component: Feature60Component17Component;
  let fixture: ComponentFixture<Feature60Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
