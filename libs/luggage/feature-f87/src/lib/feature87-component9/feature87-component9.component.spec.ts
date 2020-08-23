import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component9Component } from './feature87-component9.component';

describe('Feature87Component9Component', () => {
  let component: Feature87Component9Component;
  let fixture: ComponentFixture<Feature87Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
