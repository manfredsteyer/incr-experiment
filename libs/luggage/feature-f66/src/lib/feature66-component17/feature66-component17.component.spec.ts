import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component17Component } from './feature66-component17.component';

describe('Feature66Component17Component', () => {
  let component: Feature66Component17Component;
  let fixture: ComponentFixture<Feature66Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
