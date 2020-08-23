import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component14Component } from './feature18-component14.component';

describe('Feature18Component14Component', () => {
  let component: Feature18Component14Component;
  let fixture: ComponentFixture<Feature18Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
