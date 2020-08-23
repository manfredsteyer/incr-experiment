import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component17Component } from './feature93-component17.component';

describe('Feature93Component17Component', () => {
  let component: Feature93Component17Component;
  let fixture: ComponentFixture<Feature93Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
