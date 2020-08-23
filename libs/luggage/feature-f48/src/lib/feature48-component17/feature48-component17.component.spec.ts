import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component17Component } from './feature48-component17.component';

describe('Feature48Component17Component', () => {
  let component: Feature48Component17Component;
  let fixture: ComponentFixture<Feature48Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
