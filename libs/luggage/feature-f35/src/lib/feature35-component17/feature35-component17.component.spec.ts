import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component17Component } from './feature35-component17.component';

describe('Feature35Component17Component', () => {
  let component: Feature35Component17Component;
  let fixture: ComponentFixture<Feature35Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
