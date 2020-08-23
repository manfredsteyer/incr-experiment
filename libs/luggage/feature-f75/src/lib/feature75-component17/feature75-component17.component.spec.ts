import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component17Component } from './feature75-component17.component';

describe('Feature75Component17Component', () => {
  let component: Feature75Component17Component;
  let fixture: ComponentFixture<Feature75Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
