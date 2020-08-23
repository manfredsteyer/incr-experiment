import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component21Component } from './feature3-component21.component';

describe('Feature3Component21Component', () => {
  let component: Feature3Component21Component;
  let fixture: ComponentFixture<Feature3Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
