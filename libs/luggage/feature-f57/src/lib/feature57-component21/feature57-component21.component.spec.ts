import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component21Component } from './feature57-component21.component';

describe('Feature57Component21Component', () => {
  let component: Feature57Component21Component;
  let fixture: ComponentFixture<Feature57Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
