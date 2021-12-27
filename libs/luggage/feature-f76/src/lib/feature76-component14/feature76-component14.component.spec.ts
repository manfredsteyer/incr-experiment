import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component14Component } from './feature76-component14.component';

describe('Feature76Component14Component', () => {
  let component: Feature76Component14Component;
  let fixture: ComponentFixture<Feature76Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
