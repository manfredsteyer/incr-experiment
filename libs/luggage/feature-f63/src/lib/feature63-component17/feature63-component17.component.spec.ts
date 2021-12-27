import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component17Component } from './feature63-component17.component';

describe('Feature63Component17Component', () => {
  let component: Feature63Component17Component;
  let fixture: ComponentFixture<Feature63Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
