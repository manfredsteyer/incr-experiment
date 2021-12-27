import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component14Component } from './feature87-component14.component';

describe('Feature87Component14Component', () => {
  let component: Feature87Component14Component;
  let fixture: ComponentFixture<Feature87Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
