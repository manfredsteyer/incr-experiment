import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component17Component } from './feature72-component17.component';

describe('Feature72Component17Component', () => {
  let component: Feature72Component17Component;
  let fixture: ComponentFixture<Feature72Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
