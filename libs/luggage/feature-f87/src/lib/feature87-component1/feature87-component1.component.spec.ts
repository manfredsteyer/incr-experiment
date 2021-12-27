import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component1Component } from './feature87-component1.component';

describe('Feature87Component1Component', () => {
  let component: Feature87Component1Component;
  let fixture: ComponentFixture<Feature87Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
