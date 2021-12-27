import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component17Component } from './feature69-component17.component';

describe('Feature69Component17Component', () => {
  let component: Feature69Component17Component;
  let fixture: ComponentFixture<Feature69Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
