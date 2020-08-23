import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component17Component } from './feature20-component17.component';

describe('Feature20Component17Component', () => {
  let component: Feature20Component17Component;
  let fixture: ComponentFixture<Feature20Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
