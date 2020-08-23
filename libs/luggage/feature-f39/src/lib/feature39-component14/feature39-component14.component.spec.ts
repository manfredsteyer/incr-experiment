import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component14Component } from './feature39-component14.component';

describe('Feature39Component14Component', () => {
  let component: Feature39Component14Component;
  let fixture: ComponentFixture<Feature39Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
