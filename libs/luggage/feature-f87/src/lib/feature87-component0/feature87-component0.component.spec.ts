import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component0Component } from './feature87-component0.component';

describe('Feature87Component0Component', () => {
  let component: Feature87Component0Component;
  let fixture: ComponentFixture<Feature87Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
