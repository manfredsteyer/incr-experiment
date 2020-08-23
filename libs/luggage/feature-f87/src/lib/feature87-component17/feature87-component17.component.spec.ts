import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component17Component } from './feature87-component17.component';

describe('Feature87Component17Component', () => {
  let component: Feature87Component17Component;
  let fixture: ComponentFixture<Feature87Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
