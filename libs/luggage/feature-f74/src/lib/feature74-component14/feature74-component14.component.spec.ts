import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component14Component } from './feature74-component14.component';

describe('Feature74Component14Component', () => {
  let component: Feature74Component14Component;
  let fixture: ComponentFixture<Feature74Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
