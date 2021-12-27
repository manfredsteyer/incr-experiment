import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component17Component } from './feature16-component17.component';

describe('Feature16Component17Component', () => {
  let component: Feature16Component17Component;
  let fixture: ComponentFixture<Feature16Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
