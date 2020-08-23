import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component17Component } from './feature7-component17.component';

describe('Feature7Component17Component', () => {
  let component: Feature7Component17Component;
  let fixture: ComponentFixture<Feature7Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
