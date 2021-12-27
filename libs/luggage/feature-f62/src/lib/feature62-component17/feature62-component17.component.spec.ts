import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component17Component } from './feature62-component17.component';

describe('Feature62Component17Component', () => {
  let component: Feature62Component17Component;
  let fixture: ComponentFixture<Feature62Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
