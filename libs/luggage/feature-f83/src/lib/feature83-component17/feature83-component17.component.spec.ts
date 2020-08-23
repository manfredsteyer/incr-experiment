import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component17Component } from './feature83-component17.component';

describe('Feature83Component17Component', () => {
  let component: Feature83Component17Component;
  let fixture: ComponentFixture<Feature83Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
