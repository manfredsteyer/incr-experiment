import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component17Component } from './feature29-component17.component';

describe('Feature29Component17Component', () => {
  let component: Feature29Component17Component;
  let fixture: ComponentFixture<Feature29Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
