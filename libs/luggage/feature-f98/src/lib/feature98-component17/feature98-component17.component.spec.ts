import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component17Component } from './feature98-component17.component';

describe('Feature98Component17Component', () => {
  let component: Feature98Component17Component;
  let fixture: ComponentFixture<Feature98Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
