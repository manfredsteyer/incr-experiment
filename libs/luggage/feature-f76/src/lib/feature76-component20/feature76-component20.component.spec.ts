import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component20Component } from './feature76-component20.component';

describe('Feature76Component20Component', () => {
  let component: Feature76Component20Component;
  let fixture: ComponentFixture<Feature76Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
