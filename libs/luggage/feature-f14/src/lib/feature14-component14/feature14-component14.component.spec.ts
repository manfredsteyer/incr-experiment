import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component14Component } from './feature14-component14.component';

describe('Feature14Component14Component', () => {
  let component: Feature14Component14Component;
  let fixture: ComponentFixture<Feature14Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
