import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component24Component } from './feature87-component24.component';

describe('Feature87Component24Component', () => {
  let component: Feature87Component24Component;
  let fixture: ComponentFixture<Feature87Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
