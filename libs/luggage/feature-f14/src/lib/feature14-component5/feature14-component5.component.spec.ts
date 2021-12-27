import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component5Component } from './feature14-component5.component';

describe('Feature14Component5Component', () => {
  let component: Feature14Component5Component;
  let fixture: ComponentFixture<Feature14Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
