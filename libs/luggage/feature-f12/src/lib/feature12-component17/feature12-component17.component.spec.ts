import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component17Component } from './feature12-component17.component';

describe('Feature12Component17Component', () => {
  let component: Feature12Component17Component;
  let fixture: ComponentFixture<Feature12Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
