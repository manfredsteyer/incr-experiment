import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component11Component } from './feature57-component11.component';

describe('Feature57Component11Component', () => {
  let component: Feature57Component11Component;
  let fixture: ComponentFixture<Feature57Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
