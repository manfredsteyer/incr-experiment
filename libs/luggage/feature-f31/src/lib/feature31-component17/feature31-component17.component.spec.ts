import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component17Component } from './feature31-component17.component';

describe('Feature31Component17Component', () => {
  let component: Feature31Component17Component;
  let fixture: ComponentFixture<Feature31Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
