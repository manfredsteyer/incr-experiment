import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component13Component } from './feature87-component13.component';

describe('Feature87Component13Component', () => {
  let component: Feature87Component13Component;
  let fixture: ComponentFixture<Feature87Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
