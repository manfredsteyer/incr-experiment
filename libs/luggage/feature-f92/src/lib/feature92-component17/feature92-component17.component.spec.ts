import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component17Component } from './feature92-component17.component';

describe('Feature92Component17Component', () => {
  let component: Feature92Component17Component;
  let fixture: ComponentFixture<Feature92Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});