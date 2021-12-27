import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component17Component } from './feature8-component17.component';

describe('Feature8Component17Component', () => {
  let component: Feature8Component17Component;
  let fixture: ComponentFixture<Feature8Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
