import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component3Component } from './feature87-component3.component';

describe('Feature87Component3Component', () => {
  let component: Feature87Component3Component;
  let fixture: ComponentFixture<Feature87Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature87Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
