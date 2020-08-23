import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component17Component } from './feature89-component17.component';

describe('Feature89Component17Component', () => {
  let component: Feature89Component17Component;
  let fixture: ComponentFixture<Feature89Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
