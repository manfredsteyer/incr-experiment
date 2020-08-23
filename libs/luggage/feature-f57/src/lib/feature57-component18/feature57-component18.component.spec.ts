import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component18Component } from './feature57-component18.component';

describe('Feature57Component18Component', () => {
  let component: Feature57Component18Component;
  let fixture: ComponentFixture<Feature57Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
