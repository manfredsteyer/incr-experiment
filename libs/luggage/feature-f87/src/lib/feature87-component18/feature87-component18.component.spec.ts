import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component18Component } from './feature87-component18.component';

describe('Feature87Component18Component', () => {
  let component: Feature87Component18Component;
  let fixture: ComponentFixture<Feature87Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
