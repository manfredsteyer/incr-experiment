import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component17Component } from './feature70-component17.component';

describe('Feature70Component17Component', () => {
  let component: Feature70Component17Component;
  let fixture: ComponentFixture<Feature70Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
