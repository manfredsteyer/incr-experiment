import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component14Component } from './feature45-component14.component';

describe('Feature45Component14Component', () => {
  let component: Feature45Component14Component;
  let fixture: ComponentFixture<Feature45Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
