import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component21Component } from './feature76-component21.component';

describe('Feature76Component21Component', () => {
  let component: Feature76Component21Component;
  let fixture: ComponentFixture<Feature76Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
