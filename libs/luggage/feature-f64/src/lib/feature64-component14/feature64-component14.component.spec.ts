import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component14Component } from './feature64-component14.component';

describe('Feature64Component14Component', () => {
  let component: Feature64Component14Component;
  let fixture: ComponentFixture<Feature64Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
