import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component17Component } from './feature49-component17.component';

describe('Feature49Component17Component', () => {
  let component: Feature49Component17Component;
  let fixture: ComponentFixture<Feature49Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
