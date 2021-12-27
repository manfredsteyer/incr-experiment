import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component28Component } from './feature87-component28.component';

describe('Feature87Component28Component', () => {
  let component: Feature87Component28Component;
  let fixture: ComponentFixture<Feature87Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
