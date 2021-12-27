import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component14Component } from './feature96-component14.component';

describe('Feature96Component14Component', () => {
  let component: Feature96Component14Component;
  let fixture: ComponentFixture<Feature96Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
