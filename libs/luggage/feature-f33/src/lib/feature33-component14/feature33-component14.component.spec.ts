import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component14Component } from './feature33-component14.component';

describe('Feature33Component14Component', () => {
  let component: Feature33Component14Component;
  let fixture: ComponentFixture<Feature33Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
