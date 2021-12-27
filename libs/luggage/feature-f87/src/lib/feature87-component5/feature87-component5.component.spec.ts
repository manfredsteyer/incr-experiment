import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component5Component } from './feature87-component5.component';

describe('Feature87Component5Component', () => {
  let component: Feature87Component5Component;
  let fixture: ComponentFixture<Feature87Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
