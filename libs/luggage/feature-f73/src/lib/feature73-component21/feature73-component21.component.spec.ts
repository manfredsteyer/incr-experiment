import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component21Component } from './feature73-component21.component';

describe('Feature73Component21Component', () => {
  let component: Feature73Component21Component;
  let fixture: ComponentFixture<Feature73Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
