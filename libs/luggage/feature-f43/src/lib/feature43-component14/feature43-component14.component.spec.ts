import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component14Component } from './feature43-component14.component';

describe('Feature43Component14Component', () => {
  let component: Feature43Component14Component;
  let fixture: ComponentFixture<Feature43Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
