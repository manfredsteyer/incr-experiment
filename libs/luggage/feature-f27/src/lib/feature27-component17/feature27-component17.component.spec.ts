import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component17Component } from './feature27-component17.component';

describe('Feature27Component17Component', () => {
  let component: Feature27Component17Component;
  let fixture: ComponentFixture<Feature27Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
