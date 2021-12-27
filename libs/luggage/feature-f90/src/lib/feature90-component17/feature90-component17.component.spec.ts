import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component17Component } from './feature90-component17.component';

describe('Feature90Component17Component', () => {
  let component: Feature90Component17Component;
  let fixture: ComponentFixture<Feature90Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
