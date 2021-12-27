import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component14Component } from './feature31-component14.component';

describe('Feature31Component14Component', () => {
  let component: Feature31Component14Component;
  let fixture: ComponentFixture<Feature31Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
