import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component21Component } from './feature46-component21.component';

describe('Feature46Component21Component', () => {
  let component: Feature46Component21Component;
  let fixture: ComponentFixture<Feature46Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
