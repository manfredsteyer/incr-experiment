import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component17Component } from './feature56-component17.component';

describe('Feature56Component17Component', () => {
  let component: Feature56Component17Component;
  let fixture: ComponentFixture<Feature56Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
