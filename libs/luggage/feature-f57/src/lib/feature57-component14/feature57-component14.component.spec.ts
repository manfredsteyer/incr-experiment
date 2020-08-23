import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component14Component } from './feature57-component14.component';

describe('Feature57Component14Component', () => {
  let component: Feature57Component14Component;
  let fixture: ComponentFixture<Feature57Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
