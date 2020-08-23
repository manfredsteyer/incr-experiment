import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component21Component } from './feature85-component21.component';

describe('Feature85Component21Component', () => {
  let component: Feature85Component21Component;
  let fixture: ComponentFixture<Feature85Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
