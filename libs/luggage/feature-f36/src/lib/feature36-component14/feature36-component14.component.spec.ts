import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component14Component } from './feature36-component14.component';

describe('Feature36Component14Component', () => {
  let component: Feature36Component14Component;
  let fixture: ComponentFixture<Feature36Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});