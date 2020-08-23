import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component14Component } from './feature3-component14.component';

describe('Feature3Component14Component', () => {
  let component: Feature3Component14Component;
  let fixture: ComponentFixture<Feature3Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
