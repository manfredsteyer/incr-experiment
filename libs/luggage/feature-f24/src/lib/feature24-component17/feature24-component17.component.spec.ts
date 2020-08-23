import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component17Component } from './feature24-component17.component';

describe('Feature24Component17Component', () => {
  let component: Feature24Component17Component;
  let fixture: ComponentFixture<Feature24Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
