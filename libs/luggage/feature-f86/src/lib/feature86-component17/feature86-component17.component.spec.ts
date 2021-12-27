import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component17Component } from './feature86-component17.component';

describe('Feature86Component17Component', () => {
  let component: Feature86Component17Component;
  let fixture: ComponentFixture<Feature86Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
