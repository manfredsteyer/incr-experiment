import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component14Component } from './feature25-component14.component';

describe('Feature25Component14Component', () => {
  let component: Feature25Component14Component;
  let fixture: ComponentFixture<Feature25Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
