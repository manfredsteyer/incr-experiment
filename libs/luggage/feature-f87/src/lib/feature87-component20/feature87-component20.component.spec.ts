import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component20Component } from './feature87-component20.component';

describe('Feature87Component20Component', () => {
  let component: Feature87Component20Component;
  let fixture: ComponentFixture<Feature87Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
