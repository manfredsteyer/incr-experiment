import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component17Component } from './feature40-component17.component';

describe('Feature40Component17Component', () => {
  let component: Feature40Component17Component;
  let fixture: ComponentFixture<Feature40Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
