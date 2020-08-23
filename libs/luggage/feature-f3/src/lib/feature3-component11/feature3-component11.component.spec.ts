import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component11Component } from './feature3-component11.component';

describe('Feature3Component11Component', () => {
  let component: Feature3Component11Component;
  let fixture: ComponentFixture<Feature3Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
