import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component14Component } from './feature51-component14.component';

describe('Feature51Component14Component', () => {
  let component: Feature51Component14Component;
  let fixture: ComponentFixture<Feature51Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
