import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component17Component } from './feature4-component17.component';

describe('Feature4Component17Component', () => {
  let component: Feature4Component17Component;
  let fixture: ComponentFixture<Feature4Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
