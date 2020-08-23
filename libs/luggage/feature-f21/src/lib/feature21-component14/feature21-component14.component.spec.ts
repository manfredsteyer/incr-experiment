import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component14Component } from './feature21-component14.component';

describe('Feature21Component14Component', () => {
  let component: Feature21Component14Component;
  let fixture: ComponentFixture<Feature21Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
